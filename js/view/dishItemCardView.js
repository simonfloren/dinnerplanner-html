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
      // console.info("[dishItemCardView] Creating dish card: ", dish.title);

      this.dish = dish;

      // retrieve dish card from templates
      this.template = document
        .querySelector('#templates')
        .querySelector('#dish-card')
        .cloneNode(true);

      this.template.querySelector('#dish-img').src = dish.image;
      this.template.querySelector('#dish-name').textContent = dish.title;

      container.appendChild(this.template);
    }
 }