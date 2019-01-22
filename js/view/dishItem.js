/** A dish item card
 * 
 * Renders the card for a single dish item
 * 
 * @param {jQuery object} container - references the HTML parent element that
 * will become the card
 * @param {Object} data - the dish data
 */
var DishItem = function(data) {
  
  var cardWrapper = document.createElement("div");
  cardWrapper.setAttribute("class", "col-md-2 dish-card");
  
  var card = document.createElement("div");
  card.setAttribute("id", "dishItem");
  card.setAttribute("class", "card"); 

  var img = document.createElement("img");
  img.setAttribute("class", "card-img-top img-fluid");
  img.setAttribute("src", "images/" + data['image']);
  img.setAttribute("alt", data['name']);
  card.appendChild(img);

  var innerDiv = document.createElement("div");
  innerDiv.setAttribute("id", "dishName");
  innerDiv.setAttribute("class", "card-body text-center");

  var text = document.createElement("p");
  text.setAttribute("class", "card-text");
  text.textContent = data['name'];

  innerDiv.appendChild(text);
  card.appendChild(innerDiv);
  cardWrapper.appendChild(card);

  return cardWrapper;
}