/**
 * Dish item card controller
 * Author: Albin Winkelmann
 * 
 * @param {Object} view - The view the controller is controlling
 * @param {DinnerModel} model - Model containing the dish, menu and other data
 * @param {Object} stateCtrl - The general state controller
 */
class DishItemCardController {
  constructor(view, model, stateCtrl) {
    console.info("[dishItemCardController] Initializing..");

    // Declare functions
    this.openDish;

    // Declare variables
    this.stateCtrl = stateCtrl;

    // attach listener to dishItemCard element
    view.template.querySelector('#dish-img').addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Dish pressed", view.dish.id);
      this.openDish(view.dish.id);
    });
  }

  // Go to selected dish
  openDish(id) {
    this.stateCtrl.viewDish(id);
  }
}