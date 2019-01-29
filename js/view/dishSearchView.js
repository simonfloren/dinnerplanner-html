/** Dish Search View
 * 
 * Handles the dish search view, that is:
 *  - displays food based on search criterias
 *  - updates the model if something was chosen
 * 
 * @param {Node} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
class DishSearchView {

  constructor(container, model) {
    console.info("[dishSearchView] Initializing..");

    if (typeof container === 'undefined') {
      console.error("Undefined container");
      return;
    }

    this.container = container;
    this.model = model;

    this.keyWords = container.querySelector('#keyWords')
      .addEventListener('change', (e) => {
        e.preventDefault();
        let keyWordsList = e.target.value.split(' ');
        console.log("New set of keywords", keyWordsList);
      });

    this.selectBox = container.querySelector('#dishTypeSelect');
    this.dishContainer = container.querySelector('#dishSearchBody');
    
    // Remove default select box item
    this.selectBox = container.querySelector('#dishTypeSelect');
    const newSelectBox = this.selectBox.cloneNode(false);
    this.selectBox.parentNode.replaceChild(newSelectBox, this.selectBox);
    this.selectBox = newSelectBox;
  }

  render(model) {
    let dishTypes = model.getDishTypes();

    dishTypes.forEach((type, index) => {
      const option = new Option(type, index);
      this.selectBox.appendChild(option);
    });

    model.getAllDishes('main dish').forEach(data => {
      console.log("data", data);
      let newDish = new DishItem(data, model);
      this.dishContainer.append(newDish);
    });
  }

  update() {
    this.render();
  }

  hideView() {
    this.container.setAttribute('display', 'none');
    this.model.removeObserver(this);
  }

  showView() {
    this.container.removeAttribute('display');
    this.model.addObserver(this);
    //render table to dom
    this.render(this.model);
  }
};