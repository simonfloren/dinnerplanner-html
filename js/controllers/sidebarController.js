// is this called from within the view or app.js/general controller?
var SidebarController = function (view, model) {
  console.info("[SidebarController] Initializing..");

  // TODO: change current way that number of guests are updated
  view.plusButton.click(function () {
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
  });

  view.minusButton.click(function () {
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
  });

  // TODO: reroute to menu overview on button clicked
}