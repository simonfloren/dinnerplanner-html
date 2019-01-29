class SidebarController {

  constructor(view, model, gsc) {
    console.info("[sidebarController] Initializing..");

    // TODO: change current way that number of guests are updated
    view.plusButton.addEventListener("click", () => {
      model.setNumberOfGuests(model.getNumberOfGuests() + 1)
    });
    view.minusButton.addEventListener("click", () => {
      model.setNumberOfGuests(model.getNumberOfGuests() - 1)
    });

    view.confirmBtn.addEventListener("click", () => {
      // TODO: reroute to menu overview on button clicked
    });
  }
}