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
    //this.overViewBodyContainer.innnerHTML = "";
    let newOverView = this.overViewBodyContainer.cloneNode(false);
    this.overViewBodyContainer.parentNode.replaceChild(newOverView, this.overViewBodyContainer);
    this.overViewBodyContainer = newOverView;

    let totPrice = 0;

    this.model.getFullMenu().forEach(data => {
      console.log("data", data);
      let dish = new DishItemCardView(this.overViewBodyContainer, data);
      let priceTag = this.template.cloneNode(true);
      const price = data.pricePerServing * this.model.getNumberOfGuests();
      totPrice += price;
      priceTag.querySelector('#price').textContent = price;
      dish.template.appendChild(priceTag);
    });

    // populate price field
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