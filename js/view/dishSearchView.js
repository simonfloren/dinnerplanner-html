/** Dish Search View
 * 
 * Handles the dish search view, that is:
 *  - displays food based on search criterias
 *  - updates the model if something was chosen
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var DishSearchView = function(container, model) {
  console.log("Initializing Dish Search View..");

  var keyWordsAttribute = container.find('#keyWords');
  var selectBox         = container.find('#dishTypeSelect');
  var dishContainer     = container.find('#dishSearchBody');

  console.log("dish container", dishContainer);

  // load options into option field
  const dishTypes = model.getDishTypes();
  $(selectBox).children().remove(); // remove all junk
  dishTypes.forEach((type, index) => {
    $(selectBox)
         .append($("<option></option>")
         .attr("value", index)
         .text(type));
  });

  // Might not be needed, we're building a form sdasdasdasd
  var keyWords = keyWordsAttribute.val().split();
  console.log("New set of keywords", keyWords);

  //TODO
  // Query functions for the model (get the right food)

  // Populate the search thingy with main dishes, for now
  model.getAllDishes('main dish').forEach(data => {
    console.log("data", data);
    var lel = new DishItem(data, model);
    $(dishContainer).append(lel);
  });
};