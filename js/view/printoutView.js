/**
 * 
 */
class PrintoutView {
  constructor(container, model) {
    if (typeof container === 'undefined') {
      console.error("Undefined container");
      return;
    }

    this.model = model;
    this.container = container;

    let numberOfPeopleContainer = container.find("#numberOfGuests");
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
    this.model.removeObserver(this.update);
  }

  showView() {
    this.container.removeAttribute('display');
    this.model.addObserver(this.update);
    render();
  }
}