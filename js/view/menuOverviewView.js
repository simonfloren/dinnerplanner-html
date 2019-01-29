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

    this.overViewBodyContainer = container.querySelector("#printCards");
    this.priceContainer = container.querySelector("#totalPrice");

    this.printBtn = container.querySelector('#printBtn');
  }

  render() {
    // update number of people
    this.numberOfPeopleContainer.textContent = this.model.getNumberOfGuests();

    // Populate the overview with main dishes, for now
    this.model.getFullMenu().forEach(data => {
      console.log("data", data);
      let dish = new DishItem(data, this.model);
      this.overViewBodyContainer.append(dish);
    });

    // populate price field
    let price = this.model.getTotalMenuPrice();
    this.priceContainer.textContent = price;
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