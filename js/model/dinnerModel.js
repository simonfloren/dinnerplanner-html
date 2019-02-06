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
			return obs !== observer;
		});
	}

	// Model functions start here
	setNumberOfGuests(num) {
		let number = parseInt(num);
		if (number < 0) {
			return;
		}

		numberOfGuests = number;
		this.notifyObservers("guests");
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

	/** function that returns a dish of specific ID */
	getDish(id) {
		return this.getDishes([id]).then(dishes => dishes[0]);
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
			includeIngredients: filter.split(' ').join(',')
		};

		if(type !== 'all') {
			params['type'] = type;
		}

		console.log("[getAllDishes] Searching for dishes with query: ", params);
		const url = baseURL + '/recipes/searchComplex?' + this.serialize(params);

		return fetch(url, {
			headers: {
				"X-Mashape-Key": API_KEY,
				"Accept": "application/json"
			}
		})
			.then(response => response.json())
			.then(data => data.results);
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