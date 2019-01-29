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

    let overViewBodyContainer = container.querySelector("#printCards");
    let priceContainer = container.querySelector("#totalPrice");
  }

  render() {
    // update number of people
    this.numberOfPeopleContainer.html(model.getNumberOfGuests());

    // Populate the overview with main dishes, for now
    this.model.getFullMenu().forEach(data => {
      console.log("data", data);
      let dish = new DishItem(data, model);
      this.overViewBodyContainer.append(dish);
    });

    // populate price field
    let price = model.getTotalMenuPrice();
    this.priceContainer.html(price);
  }

  update() {
    render();
  }

  hideView() {
    this.container.setAttribute('display', 'none');
    this.model.removeObserver(this);
  }

  showView() {
    this.container.removeAttribute('display');
    this.model.addObserver(this);
    render();
  }
}