/**
 * Printout View
 * Author: Simon TranFloren
 */
class PrintoutView {
  constructor(container, model) {
    if (typeof container === 'undefined') {
      console.error("Undefined container");
      return;
    }

    this.model = model;
    this.container = container;

    this.template = document.querySelector('#templates').querySelector('#printout-row').cloneNode(true);
    this.poBody = container.querySelector('#printout-page__body');
  }

  render() {
    let menu = this.model.getFullMenu();
    menu.forEach(dish => {
      let row = this.template.cloneNode(true);
      row.querySelector('#dish-name').textContent = dish.name;
      row.querySelector('#printout-description').textContent = dish.description;
      row.querySelector('#po-img').src = "images/" + dish.image;
      this.poBody.appendChild(row);
    });
  }

  update() {
    this.render();
  }

  hideView() {
    console.info("[printout] Hide");
    this.container.setAttribute('display', 'none');
    this.model.removeObserver(this);
  }

  showView() {
    console.info("[printout] Show");
    this.container.removeAttribute('display');
    this.model.addObserver(this);
    this.render();
  }
}