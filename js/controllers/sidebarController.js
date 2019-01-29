// is this called from within the view or app.js/general controller?
class SidebarController {
  
  constructor(view, model) {
    console.info("[sidebarController] Initializing..");

    // TODO: change current way that number of guests are updated
  
    view.plusButton.click(function() {
      model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });

    view.minusButton.click(function() {
      model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });

    view.minusButton.click(function() {
      // TODO: reroute to menu overview on button clicked
    });
  }
};