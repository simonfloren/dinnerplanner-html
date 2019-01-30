/**
 * Author: Simon TranFloren
 */
class DishDetailsController {

    constructor(view, model, stateCtrl) {
        view.backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("[dishDetailsController] Back to search button pressed");
            stateCtrl.changeState("search-dish");
          });

        view.addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("[dishDetailsController] Add to menu button pressed, val:", e.target.value);
            
            let dish = model.addDishToMenu(e.target.value);
          });
    }
}