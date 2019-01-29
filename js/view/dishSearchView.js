/** Dish Search View
 * 
 * Handles the dish search view, that is:
 *  - displays food based on search criterias
 *  - updates the model if something was chosen
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
class DishSearchView {

  constructor(container, model) {
    console.info("[dishSearchView] Initializing..");

    if (typeof container === 'undefined') {
      console.error("Undefined container");
      return;
    }

    let keyWordsAttribute = container.find('#keyWords');
    let selectBox = container.find('#dishTypeSelect');
    let dishContainer = container.find('#dishSearchBody');

    //console.log("Dish container", dishContainer);
    
    //attach to model
    model.addObserver(this.update);

    //render table to dom
    render(model);
  }

  render(model) {
    const dishTypes = model.getDishTypes();
    this.selectBox.children().remove();
    dishTypes.forEach((type, index) => {
      selectBox
      .append(document.createElement("<option></option>")
        .attr("value", index)
        .text(type)
      );
    });

    // Might not be needed, we're building a form
    var keyWords = keyWordsAttribute.val().split();
    console.log("New set of keywords", keyWords);

    model.getAllDishes('main dish').forEach(data => {
      console.log("data", data);
      let newDish = new DishItem(data, model);
      this.dishContainer.append(newDish);
    });
  }

  update() {
    render();
  }
  
  removeView() {
    model.removeObserver(this.update);
  }
};