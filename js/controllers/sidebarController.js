/**
 *  Sidebar controller
 * 
 * @param view - The view the controller is controlling
 * @param model - Model containing the dish, menu and other data
 */
class SidebarController {
  
  constructor(view, model) {
    console.info("[sidebarController] Initializing..");

    // TODO: change current way that number of guests are updated
  
    view.plusButton.click(() => {
      model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });

    view.minusButton.click(() => {
      model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });

    view.minusButton.click(() => {
      // TODO: reroute to menu overview on button clicked
    });
  }
};
