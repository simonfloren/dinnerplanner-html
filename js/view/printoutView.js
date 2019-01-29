/**
 * Printout View
 */
class PrintoutView {
  constructor(container, model) {
    if (typeof container === 'undefined') {
      console.error("Undefined container");
      return;
    }

    this.model = model;
    this.container = container;
  }

  render() {
    // update number of people
    this.numberOfPeopleContainer.html(model.getNumberOfGuests());
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
    render();
  }
}