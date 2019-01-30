/**
 *  Dish item card controller
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

    this.stateCtrl = stateCtrl;

    // attach listener to dishItemCard element
    view.div.addEventListener('click', (e) => {
      e.preventDefault();

      const id = 0;
      console.log("Dish pressed", e.target);

      this.openDish(id);
    });
  }

  // Go to selected dish
  openDish(id) {
    this.stateCtrl.selectedDish = id;
    this.stateCtrl.changeState();
  }
}