/** A dish item card
 * 
 * Renders the card for a single dish item
 * Author: Albin Winkelmann
 * 
 * @param {Node}    container - the container in which the card will be placed
 * @param {Object}  dish - the dish data
 */
 class DishItemCardView {
    constructor(container, dish) {
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