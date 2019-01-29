/** Sidebar view 
 * 
 * It's responsible for the sidebars functionality.
 *  - add and remove guests
 *  - show what dishes are selected to menu
 *  - confirms dinner
 *  
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
class SidebarView {

  constructor(container, model) {
    console.info("[sidebarView] Initializing..");

    if (typeof container === 'undefined') {
      console.error("Undefined container");
      return;
    }

    this.model = model;
    this.container = container;

    // Variables
    this.totPrice = 0;

    //get dom elements
    this.table = container.find('#selected-dishes');
    this.dishList = document.querySelector("ul");
    this.plusButton = container.find('#plusGuest');
    this.minusButton = container.find('#minusGuest');
    this.numberOfGuests = container.find('#numberOfGuests');
    this.dinnerPrice = container.find('#dinner-price');
  }

  // Simple Observer
  render() {
    this.dishList.children().remove();
    let menu = model.getFullMenu();

    menu.forEach(dish => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      let dishPrice = 0;
      dish.ingredients.forEach(ingredient => {
        dishPrice += ingredient.price;
      });
      li.textContent = dish.name + "    " + dishPrice;
      this.totPrice += dishPrice;
      dishList.append(li);
    });

    this.dinnerPrice.html("SEK " + totPrice);
    this.numberOfGuests.html(model.getNumberOfGuests());
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