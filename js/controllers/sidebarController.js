/**
 *  Sidebar controller
 *  Author: Albin Winkelmann, Simon TranFloren
 * 
 *  @param {Node} view - The view the controller is controlling
 *  @param {DinnerModel} model - Model containing the dish, menu and other data
 *  @param {Object} stateCtrl - reference to general state controller
 */
class SidebarController {
  
  constructor(view, model, stateCtrl) {
    console.info("[sidebarController] Initializing..");

    view.numberOfGuests.addEventListener('change', (e) => {
      let val = e.target.value;
      console.log("Number of people set, BY KEAYBOARDDZZ", val);
      model.setNumberOfGuests(val);
    })
  
    view.plusButton.addEventListener('click', () => {
      console.log("plusButton pressed");
      model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });

    view.minusButton.addEventListener('click', () => {
      console.log("minusButton pressed");
      if(model.getNumberOfGuests() >= 0) {
        model.setNumberOfGuests(model.getNumberOfGuests() - 1);
      }
    });

    view.confirmButton.addEventListener('click', () => {
      console.log("confirmButton pressed");
      stateCtrl.changeState("printout");
    });
  }
};
