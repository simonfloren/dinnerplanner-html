/** Sidebar view 
 * 
 * It's responsible for the sidebars functionality.
 *  - add and remove guests
 *  - show what dishes are selected to menu
 *  - confirms dinner
 * 
 * Author: Albin Winkelmann, Simon TranFloren
 *  
 * @param {Node} container - references the HTML parent element that contains
 * the view.
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
    this.menu = [];

    // Get dom elements
    this.table = document.querySelector('#selected-dishes');
    this.dishList = document.querySelector("#sidebar__body__list");
    this.plusButton = document.querySelector('#plusGuest');
    this.minusButton = document.querySelector('#minusGuest');
    this.confirmButton = document.querySelector('#confirmBtn');
    this.numberOfGuests = document.querySelector('#numberOfGuestsField');
    this.dinnerPrice = document.querySelector('#dinner-price');

    this.template = document.querySelector('#template');
  }

  // Simple Observer
  render() {
    console.info("[sidebarView] Render");
    const menu = this.model.getFullMenu();
    const guests = this.model.getNumberOfGuests();
    
    // Remove previous list
    const newList = this.dishList.cloneNode(false);
    this.dishList.parentNode.replaceChild(newList, this.dishList);
    this.dishList = newList;

    const template = this.template;

    let totPrice = 0;
    menu.forEach(dish => {
      console.log("dish", dish);
      let dishDiv = template.cloneNode(true);;
      totPrice += dish.pricePerServing * guests;

      dishDiv.querySelector('#dish-name').textContent = dish.title;
      dishDiv.querySelector('#dish-price').textContent = "SEK " + (dish.pricePerServing * guests);
      this.dishList.append(dishDiv);
    });

    this.dinnerPrice.textContent = "SEK " + totPrice;
    this.numberOfGuests.value = guests;

    // Disable button
    if (menu.length == 0) {
      this.confirmButton.setAttribute('disabled', true);
    }
    else {
      this.confirmButton.removeAttribute('disabled');
    }
  }

  update(model, details) {
    if(details === 'menu' || details === 'guests') {
      console.info("[sidebarView] Update");
      this.render();
    }
  }

  hideView() {
    console.info("[sidebarView] Hide");
    this.container.setAttribute('display', 'none');
    this.model.removeObserver(this);
  }

  showView() {
    console.info("[sidebarView] Show");
    this.container.removeAttribute('display');
    this.model.addObserver(this);
    this.render();
  }

}