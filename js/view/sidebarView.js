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

  if (typeof container === 'undefined') {
    console.error("Undefined container");
    return;
  }

  // Public functions
  var update, removeView;

  // Private functions
  var render;

  this.fuckjavascript = 10;

  // DOM Elements
  var $table,
    $dishList,
    $dinnerPrice,
    $numberOfGuests,
    $plusButton,
    $minusButton,
    $confirmButton;

  // Variables
  var menu;
  var totPrice = 0;

  /**** Init Sidebar View ****/
  this.init = function () {
    console.info("[SidebarView] Initializing..");

    //get menu
    menu = model.getFullMenu();

    //get dom elements
    $table = container.find('#selected-dishes');
    $dishList = container.find("dish-list");
    $dinnerPrice = container.find('#dinner-price');
    $numberOfGuests = container.find('#numberOfGuests');

    
    $plusButton = container.find('#plusGuest');
    $minusButton = container.find('#minusGuest');
    $confirmButton = container.find('#confirmBtn');
    console.log($plusButton);

    //attach to model
    model.addObserver(this.update);

    //render table to dom
    render(model);
  }

  // Simple Observer
  this.render = function (model, changeDetails) {
    $dishList.children().remove();
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
      $dishList.append(li);
    });

    $dinnerPrice.html("SEK " + totPrice);
    $numberOfGuests.html(model.getNumberOfGuests());
  }

  this.removeView = function () {
    model.removeObserver(this.update);
  }

  this.update = function () {
    render();
  }

  
};