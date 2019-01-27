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
var SidebarView = function (container, model) {

  // Simple
  this.update = function (model, changeDetails) {
    ul.children().remove();
    var menu = model.getFullMenu();
    menu.forEach(dish => {
      var li = document.createElement("li");
      li.className = "list-group-item";
      var dishPrice = 0;
      dish.ingredients.forEach(ingredient => {
        dishPrice += ingredient.price;
      });
      li.textContent = dish.name + "    " + dishPrice;
      totPrice += dishPrice;
      ul.append(li);
    });
    dinnerPrice.html("SEK " + totPrice);

    selectedGuests = model.getNumberOfGuests();
  }

  this.removeView = function () {
    model.removeObserver(this.update);
  }

  if (typeof container === 'undefined') {
    console.error("Undefined container");
    return;
  }
  console.info("[SidebarView] Initializing..");

  this.plusButton = container.find('#plusGuest');
  this.minusButton = container.find('#minusGuest');

  // Render table
  this.table = container.find('#selected-dishes');
  var menu = model.getFullMenu();
  var ul = document.querySelector("ul");
  var totPrice = 0;
  menu.forEach(dish => {
    var li = document.createElement("li");
    li.className = "list-group-item";
    var dishPrice = 0;
    dish.ingredients.forEach(ingredient => {
      dishPrice += ingredient.price;
    });
    li.textContent = dish.name + "    " + dishPrice;
    totPrice += dishPrice;
    ul.append(li);
  });
  var dinnerPrice = container.find('#dinner-price');
  dinnerPrice.html("SEK " + totPrice);

  model.addObserver(this.update);
};