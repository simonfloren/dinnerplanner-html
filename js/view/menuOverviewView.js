/**
 * Author: Simon TranFloren
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
    this.priceContainer = container.querySelector("#totalMenuPrice");

    this.printBtn = container.querySelector('#printBtn');

    this.template = document.querySelector('#templates').querySelector('#cardPrice').cloneNode(true);
  }

  render() {
    // Populate the overview with main dishes, for now
    this.model.getFullMenu().forEach(data => {
      console.log("data", data);
      let dish = new DishItemCardView(this.overViewBodyContainer, data);
      let priceTag = this.template.cloneNode(true);
      priceTag.querySelector('#price').textContent = this.model.getDishPrice(data) * this.model.getNumberOfGuests();
      dish.template.appendChild(priceTag);
    });

    // populate price field
    let totPrice = this.model.getTotalMenuPrice();
    this.priceContainer.textContent = totPrice;
  }

  update() {
    this.render();
  }

  hideView() {
    this.container.setAttribute('display', 'none');
    this.model.removeObserver(this);
  }

  showView() {
    this.container.removeAttribute('display');
    this.model.addObserver(this);
    this.render();
  }
}