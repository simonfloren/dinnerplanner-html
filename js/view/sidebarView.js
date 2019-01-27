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
var SidebarView = (function(container, model) {

  if (typeof container === 'undefined') {
    console.error("Undefined container");
    return;
  }

  // Public functions
  var update, removeView;

  // DOM Elements
  var $table, $ul, $plusButton, $minusButton;

  // Variables
  var menu;
  var totPrice = 0;

  /**** Init Sidebar View ****/
  init = function() {
    console.info("[SidebarView] Initializing..");

    //get menu
    menu = model.getFullMenu();

    //get dom elements
    $table        = container.find('#selected-dishes');
    ul            = document.querySelector("ul");
    $plusButton   = container.find('#plusGuest');
    $minusButton  = container.find('#minusGuest');

    //attach to model
    model.addObserver(this.update);

    //render table to dom
    render();
  }

  // Simple
  update = function (model, changeDetails) {
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

  removeView = function () {
    model.removeObserver(this.update);
  }

  // Render table
  render = function() {
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
  }
});