/** A dish item card
 * 
 * Renders the card for a single dish item
 * 
 * @param {Object} data - the dish data
 * @param {Object} model - the reference to the Dinner Model
 */
let DishItem = function(data, model) {
  
  let cardWrapper = document.createElement("div");
  cardWrapper.setAttribute("class", "col-md-4 dish-card");
  
  let card = document.createElement("div");
  card.setAttribute("id", "dishItem");
  card.setAttribute("class", "card"); 

  let img = document.createElement("img");
  img.setAttribute("class", "card-img-top img-fluid");
  img.setAttribute("src", "images/" + data['image']);
  img.setAttribute("alt", data['name']);
  card.appendChild(img);

  let innerDiv = document.createElement("div");
  innerDiv.setAttribute("id", "dishName");
  innerDiv.setAttribute("class", "list-group list-group-flush");

  let name = document.createElement("li");
  name.setAttribute("class", "list-group-item");
  name.textContent = data['name'];
  
  let price = document.createElement("li");
  price.setAttribute("class", "list-group-item");
  price.textContent = "Price: " + model.getDishPrice(data) + " SEK";

  innerDiv.appendChild(name);
  // innerDiv.appendChild(price);
  card.appendChild(innerDiv);
  cardWrapper.appendChild(card);

  return cardWrapper;
}