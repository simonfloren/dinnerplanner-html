/** Dish Search View
 * 
 * Handles the dish search view, that is:
 *  - displays food based on search criterias
 *  - updates the model if something was chosen
 * 
 * Author: Albin Winkelmann
 * 
 * @param {Node} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 * @param {Object} stateCtrl - reference to general state controller
 * (used for the nestled dish item cards controlles)
 */
class DishSearchView {

  constructor(container, model, stateCtrl) {
    console.info("[dishSearchView] Initializing..");

    if (typeof container === 'undefined') {
      console.error("Undefined container");
      return;
    }

    this.container = container;
    this.model = model;
    this.stateCtrl = stateCtrl;

    this.isLoading = true;
    this.dishes = [];

    this.keyWords = container.querySelector('#keyWords');
    this.searchBtn = container.querySelector('#searchBtn');
    this.selectBox = container.querySelector('#dishTypeSelect');
    this.dishContainer = container.querySelector('#dishSearchBody');
    
    // Remove default select-box item
    this.selectBox = container.querySelector('#dishTypeSelect');
    const newSelectBox = this.selectBox.cloneNode(false);
    this.selectBox.parentNode.replaceChild(newSelectBox, this.selectBox);
    this.selectBox = newSelectBox;

    // add dishtypes to selectbox
    this.selectBox.appendChild(new Option("All", "all"));
    this.dishTypes = this.model.getDishTypes();
    this.dishTypes.forEach((type, index) => {
      const option = new Option(type, type.toLowerCase());
      this.selectBox.appendChild(option);
    });

    this.render();

    model.getRandomDishes().then(dishes => {
      this.isLoading = false;
      this.dishes = dishes;
      this.render();
    }).catch(error => {
      console.log("Error", error);
    });
  }

  render() {
    // clear all dishes
    let newDishContainer = this.dishContainer.cloneNode(false);

    if(this.isLoading) {
      
    } else {
      // render each dish
      this.dishes.forEach(cDish => {
        const dishCard = new DishItemCardView(newDishContainer, cDish);
        const dishCardController = new DishItemCardController(dishCard, this.model, this.stateCtrl);
      });
  
      this.dishContainer.parentNode.replaceChild(newDishContainer, this.dishContainer);
      this.dishContainer = newDishContainer;
    }
  }

  updateDishes(type, filter) {
    this.isLoading = true;
    this.render();

    model.getAllDishes(type, filter).then(dishes => {
      this.dishes = dishes;
      this.isLoading = false;
      this.render();
    }).catch(error => {
      console.log("Error", error);
    });
  }

  update(details) {
    if(details === 'dishes') {
      this.renderDishes();
    }
  }

  hideView() {
    this.container.setAttribute('display', 'none');
    this.model.removeObserver(this);
  }

  showView() {
    this.container.removeAttribute('display');
    this.model.addObserver(this);
    //render table to dom
    this.render();
  }
};