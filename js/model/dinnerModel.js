/**
 * DinnerModel
 * Model for the Dinner Planner app
 *
 * Author: Albin Winkelmann, Simon TranFloren
 */

let numberOfGuests = 1;
let menu = [];

// Base api url
const baseURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com";

// API Key
const API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";

class DinnerModel {
	constructor() {
		this.dishes; // declade dishes value
		this._observers = [];
	}

	// Observers
	addObserver(observer) {
		this._observers.push(observer);
	}

	notifyObservers(changeDetails) {
		console.log("[dinnerModel] Notifying observsers");
		for (var i = 0; i < this._observers.length; i++) {
			this._observers[i].update(this, changeDetails);
		}
	}

	removeObserver(observer) {
		this._observers = this._observers.filter(obs => {
			return obs !== observer; // != ?
		});
	}

	// Model functions start here
	setNumberOfGuests(num) {
		let number = parseInt(num);
		if (number < 0) {
			return;
		}

		numberOfGuests = number;
		this.notifyObservers();
	}

	getNumberOfGuests() {
		return numberOfGuests;
	}

  /** BAD WRITING: Returns the dish that is on the menu for selected type
   *  Returns the dish from the dinner menu that meets the `selected type`
   */
	getSelectedDish(type) {
		for (let i = 0; i < menu.length; i++) {
			if (menu[i].type == type) {
				return menu[i];
			}
		}
	}

	/** Returns all the dishes on the menu. */
	getFullMenu() {
		//TODO Lab 1
		return menu;
	}

	/** Returns all ingredients for all the dishes on the menu. */
	getAllIngredients() {
		let ingredients = [];
		menu.forEach(value => {
			ingredients.push(...value.ingredients);
		});
		ingredients.forEach(ing => {
			ing.quantity *= numberOfGuests;
			ing.price *= numberOfGuests;
		});
		return ingredients;
	}

	/** Returns the total price of the menu (all the ingredients multiplied by number of guests). */
	getTotalMenuPrice() {
		let totalPrice = 0;
		menu.forEach(dish => {
			totalPrice += this.getDishPrice(dish) * numberOfGuests;
		});
		return totalPrice;
	}

	/** Takes a dish and return the total price based on the ingredients, helper function for getTotalMenuPrice */
	getDishPrice(dish) {
		const ingredients = dish.ingredients;
		let price = 0;
		ingredients.forEach(currentIngredient => {
			price += currentIngredient.price;
		});
		return price;
	}

	/** function that returns a dish of specific ID */
	getDish(id) {
		return getDishes([id]).then(dishes => dishes[0]);
	}

	/**
	 * Returns an array of dishes and their info given their id's
	 * @param {Array Num} ids 
	 */
	getDishes(ids) {
		const idstring = encodeURIComponent(ids.join(","));
		const url = baseURL + "/recipes/informationBulk?ids=" + idstring;

		return fetch(url, {
			method: "GET",
			headers: {
				"X-Mashape-Key": API_KEY,
				"Accept": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => data);
	}

	/** Removes dish from menu */
	removeDishFromMenu(id) {
		menu = menu.filter(function (currentDish) {
			return currentDish.id != id;
		});
	}

  /** Adds the passed dish to the menu. If the dish of that type already exists on the menu
   * it is removed from the menu and the new one added. */
	addDishToMenu(id) {
		console.log("[dinnerModel] Added to menu, id:", id);
		let newDish = this.getDish(id);
		let prevDish = this.getSelectedDish(newDish.type);
		if (typeof prevDish !== "undefined") {
			this.removeDishFromMenu(prevDish.id);
		}
		menu.push(newDish);

		this.notifyObservers();
	}

  /** function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
   * you can use the filter argument to filter out the dish by name or ingredient (use for search)
   * if you don't pass any filter all the dishes will be returned
   */
	getAllDishes(type, filter) {
		const params = {
			number: 12,
			ingredients: filter.split(' ').join(',')
		};

		console.log("[getAllDishes] Searching for dishes with query: ", params);
		const url = baseURL + '/recipes/findByIngredients?' + this.serialize(params);

		return fetch(url, {
			headers: {
				"X-Mashape-Key": API_KEY,
				"Accept": "application/json"
			}
		})
			.then(response => response.json());
	}

	getDishTypes() {
		return types;
	}

	getRandomDishes() {
		const url = baseURL + "/recipes/random?number=" + 12;

		return fetch(url, {
			method: "GET",
			headers: {
				"X-Mashape-Key": API_KEY,
				"Accept": "application/json"
		}})
			.then(response => response.json())
			.then(data => data.recipes);
	}

	/**
	 * Serialize an object into an url encoded string
	 * @param {Object object} params 
	 */
	serialize(params) {
		var query = "";
		for(let key in params) {
			query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
		}
		return query;
	}
}





// All types of dishes
let types = ["Starter", "Main dish", "Dessert"];

// the dishes variable contains an array of all the dishes in the database.
// each dish has id, name, type, image (name of the image file), description
// and array of ingredients. Each ingredient has name, quantity (a number),
// price (a number) and unit (string defining the unit i.e. "g", "slices",
// "ml"). Unit can sometimes be empty like in the example of eggs where
// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
const dishesConst = [
	{
		id: 1,
		name: "French toast",
		type: "starter",
		image: "toast.jpg",
		description:
			"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		ingredients: [
			{
				name: "eggs",
				quantity: 0.5,
				unit: "",
				price: 10
			},
			{
				name: "milk",
				quantity: 30,
				unit: "ml",
				price: 6
			},
			{
				name: "brown sugar",
				quantity: 7,
				unit: "g",
				price: 1
			},
			{
				name: "ground nutmeg",
				quantity: 0.5,
				unit: "g",
				price: 12
			},
			{
				name: "white bread",
				quantity: 2,
				unit: "slices",
				price: 2
			}
		]
	},
	{
		id: 2,
		name: "Sourdough Starter",
		type: "starter",
		image: "sourdough.jpg",
		description: "Here is how you make it... Lore ipsum...",
		ingredients: [
			{
				name: "active dry yeast",
				quantity: 0.5,
				unit: "g",
				price: 4
			},
			{
				name: "warm water",
				quantity: 30,
				unit: "ml",
				price: 0
			},
			{
				name: "all-purpose flour",
				quantity: 15,
				unit: "g",
				price: 2
			}
		]
	},
	{
		id: 3,
		name: "Baked Brie with Peaches",
		type: "starter",
		image: "bakedbrie.jpg",
		description: "Here is how you make it... Lore ipsum...",
		ingredients: [
			{
				name: "round Brie cheese",
				quantity: 10,
				unit: "g",
				price: 8
			},
			{
				name: "raspberry preserves",
				quantity: 15,
				unit: "g",
				price: 10
			},
			{
				name: "peaches",
				quantity: 1,
				unit: "",
				price: 4
			}
		]
	},
	{
		id: 100,
		name: "Meat balls",
		type: "main dish",
		image: "meatballs.jpg",
		description:
			"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		ingredients: [
			{
				name: "extra lean ground beef",
				quantity: 115,
				unit: "g",
				price: 20
			},
			{
				name: "sea salt",
				quantity: 0.7,
				unit: "g",
				price: 3
			},
			{
				name: "small onion, diced",
				quantity: 0.25,
				unit: "",
				price: 2
			},
			{
				name: "garlic salt",
				quantity: 0.7,
				unit: "g",
				price: 2
			},
			{
				name: "Italian seasoning",
				quantity: 0.6,
				unit: "g",
				price: 3
			},
			{
				name: "dried oregano",
				quantity: 0.3,
				unit: "g",
				price: 3
			},
			{
				name: "crushed red pepper flakes",
				quantity: 0.6,
				unit: "g",
				price: 3
			},
			{
				name: "Worcestershire sauce",
				quantity: 6,
				unit: "ml",
				price: 7
			},
			{
				name: "milk",
				quantity: 20,
				unit: "ml",
				price: 4
			},
			{
				name: "grated Parmesan cheese",
				quantity: 5,
				unit: "g",
				price: 8
			},
			{
				name: "seasoned bread crumbs",
				quantity: 15,
				unit: "g",
				price: 4
			}
		]
	},
	{
		id: 101,
		name: "MD 2",
		type: "main dish",
		image: "bakedbrie.jpg",
		description: "Here is how you make it... Lore ipsum...",
		ingredients: [
			{
				name: "ingredient 1",
				quantity: 1,
				unit: "pieces",
				price: 8
			},
			{
				name: "ingredient 2",
				quantity: 15,
				unit: "g",
				price: 7
			},
			{
				name: "ingredient 3",
				quantity: 10,
				unit: "ml",
				price: 4
			}
		]
	},
	{
		id: 102,
		name: "MD 3",
		type: "main dish",
		image: "meatballs.jpg",
		description: "Here is how you make it... Lore ipsum...",
		ingredients: [
			{
				name: "ingredient 1",
				quantity: 2,
				unit: "pieces",
				price: 8
			},
			{
				name: "ingredient 2",
				quantity: 10,
				unit: "g",
				price: 7
			},
			{
				name: "ingredient 3",
				quantity: 5,
				unit: "ml",
				price: 4
			}
		]
	},
	{
		id: 103,
		name: "MD 4",
		type: "main dish",
		image: "meatballs.jpg",
		description: "Here is how you make it... Lore ipsum...",
		ingredients: [
			{
				name: "ingredient 1",
				quantity: 1,
				unit: "pieces",
				price: 4
			},
			{
				name: "ingredient 2",
				quantity: 12,
				unit: "g",
				price: 7
			},
			{
				name: "ingredient 3",
				quantity: 6,
				unit: "ml",
				price: 4
			}
		]
	},
	{
		id: 200,
		name: "Chocolat Ice cream",
		type: "dessert",
		image: "icecream.jpg",
		description: "Here is how you make it... Lore ipsum...",
		ingredients: [
			{
				name: "ice cream",
				quantity: 100,
				unit: "ml",
				price: 6
			}
		]
	},
	{
		id: 201,
		name: "Vanilla Ice cream",
		type: "dessert",
		image: "icecream.jpg",
		description: "Here is how you make it... Lore ipsum...",
		ingredients: [
			{
				name: "ice cream",
				quantity: 100,
				unit: "ml",
				price: 6
			}
		]
	},
	{
		id: 202,
		name: "Strawberry",
		type: "dessert",
		image: "icecream.jpg",
		description: "Here is how you make it... Lore ipsum...",
		ingredients: [
			{
				name: "ice cream",
				quantity: 100,
				unit: "ml",
				price: 6
			}
		]
	}
];
