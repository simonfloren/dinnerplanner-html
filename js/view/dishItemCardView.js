/** A dish item card
 * 
 * Renders the card for a single dish item
 * 
 * @param {Node}    container - the container in which the card will be placed
 * @param {Object}  data - the dish data
 * @param {Object}  model - reference to Dinner Model
 */
 class DishItemCardView {
    constructor(container, dish, data) {
      console.info("Creating dish card: ", dish.name)

      // retrieve dish card from templates
      const template = document
        .querySelector('#templates')
        .querySelector('#dish-card')
        .cloneNode(true);

      template.querySelector('#dish-img').src = "images/" + dish.image;
      template.querySelector('#dish-name').textContent = dish.name;

      container.appendChild(template);
    }
 }