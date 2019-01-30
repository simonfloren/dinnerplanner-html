/**
 *  Sidebar controller
 *  Author: Simon TranFloren
 * 
 *  @param view - The view the controller is controlling
 *  @param model - Model containing the dish, menu and other data
 */
class SidebarController {
  
  constructor(view, model) {
    console.info("[sidebarController] Initializing..");
  
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
      // TODO: reroute to menu overview on button clicked
    });
  }
};
