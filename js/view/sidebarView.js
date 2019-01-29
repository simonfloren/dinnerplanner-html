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
    console.info("[SidebarView] Initializing..");

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
  }

  // Simple Observer
  render(model, changeDetails) {
    this.dishList.children().remove();
    menu = model.getFullMenu();

    menu.forEach(dish => {
      var li = document.createElement("li");
      li.className = "list-group-item";
      var dishPrice = 0;
      dish.ingredients.forEach(ingredient => {
        dishPrice += ingredient.price;
      });
      li.textContent = dish.name + "    " + dishPrice;
      totPrice += dishPrice;
      dishList.append(li);
    });

    $dinnerPrice.html("SEK " + totPrice);
    $numberOfGuests.html(model.getNumberOfGuests());
  }

  update() {
    this.render();
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