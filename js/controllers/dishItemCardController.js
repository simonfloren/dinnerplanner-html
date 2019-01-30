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


    view.template.onclick=function(){ console.log("klasjhjasd") };

    // // attach listener to dishItemCard element
    // view.template.addEventListener('click', (e) => {
    //   e.preventDefault();

    //   const id = 0;
    //   console.log("Dish pressed", e);

    //   this.openDish(id);
    // });
  }

  // Go to selected dish
  openDish(id) {
    this.stateCtrl.changeState(id);
  }
}