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
    if(typeof container === 'undefined') {
        console.error("Undefined container");
        return;
      }
    console.log("Initializing sidebar..");

    var selectedGuests = container.find('#numberOfGuests');

    // Why is the other one "var" and these under "this."?
    this.plusButton = container.find('#plusGuest');
    this.minusButton = container.find('#minusGuest');

    // Add listener for guest plus button
    $(this.plusButton).click(function () {
        console.log("Plus button clicked");
        var currentGuests = model.getNumberOfGuests();
        currentGuests++;
        model.setNumberOfGuests(currentGuests);
        selectedGuests.val(currentGuests);
        console.log("Current number of guests: ", currentGuests);
    });

    // Add listener for guest minus button
    $(this.minusButton).click(function () {
        console.log("Minus button clicked");
        var currentGuests = model.getNumberOfGuests();
        currentGuests--;

        // we cant have a negative number of guests
        if (currentGuests < 0)
            currentGuests = 0;

        model.setNumberOfGuests(currentGuests);
        selectedGuests.val(currentGuests);
        console.log("Current number of guests: ", currentGuests);
    });

    // Add listener for changing the number of guests directly in the input field
    $(selectedGuests).change(function () {
        var newNumberOfGuests = selectedGuests.val();
        if (newNumberOfGuests < 0) {
            newNumberOfGuests = 0;
            selectedGuests.val(0);
        }
        console.log("Selected guests number changed", newNumberOfGuests);
        model.setNumberOfGuests(newNumberOfGuests);
    });

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
    /* menu.forEach(dish => {
        var li = document.createElement("li");
        li.className = "list-group-item";
        var dishPrice = 0;
        dish.ingredients.forEach(ingredient => {
            dishPrice += ingredient.price;
        });
        li.textContent = dish.name + "    " + (dishPrice * model.getNumberOfGuests());
        totPrice += (dishPrice * model.getNumberOfGuests());
        ul.appendChild(li);
      });
      var dinnerPrice = container.find('#dinner-price');
      dinnerPrice.html("SEK " + totPrice); */
};