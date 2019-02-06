/**
 *  Dish search controller
 *  Author: Albin Winkelmann
 * 
 * @param {Object} view - The view the controller is controlling
 * @param {DinnerModel} model - Model containing the dish, menu and other data
 * @param {Object} stateCtrl - The general state controller
 */
class DishSearchController {

constructor(view, model, stateCtrl) {
  console.info("[dishSearchController] Initializing..");

  view.searchBtn.addEventListener('click', (e) => {
    console.log("[dishSearchController] Search button pressed");
    e.preventDefault();
    const type = view.selectBox.value;
    const filter = view.keyWords.value;

    stateCtrl.dishSearch(type, filter);
    view.isLoading = true;
    view.render();
  });
  }
}