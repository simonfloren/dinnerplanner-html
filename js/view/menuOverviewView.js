/**
 * 
 */
class MenuOverviewView {

  constructor(container, model) {
    if (typeof container === 'undefined') {
      console.error("Undefined container");
      return;
    }

    this.container = container;
    this.model = model;

    let numberOfPeopleContainer = container.find("#numberOfGuests");
    let overViewBodyContainer = container.find("#printCards");
    let priceContainer = container.find("#totalPrice");
  }

  render(model) {
    // update number of people
    numberOfPeopleContainer.html(model.getNumberOfGuests());

    // Populate the overview with main dishes, for now
    model.getFullMenu().forEach(data => {
      console.log("data", data);
      let dish = new DishItem(data, model);
      overViewBodyContainer.append(dish);
    });

    // populate price field
    let price = model.getTotalMenuPrice();
    priceContainer.html(price);
  }

  update() {
    render();
  }

  hideView() {
    container.setAttribute('display', 'none');
    model.removeObserver(this.update);
  }

  showView() {
    container.removeAttribute('display');
    model.addObserver(this.update);
    render(model);
  }
}