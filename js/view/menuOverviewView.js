/**
 * 
 */
var MenuOverviewView = function(container, model) {
  if(typeof container === 'undefined') {
    console.error("Undefined container");
    return;
  }

  var numberOfPeopleContainer = container.find("#numberOfGuests");
  var overViewBodyContainer   = container.find("#printCards");
  var priceContainer          = container.find("#totalPrice");

  // update number of people
  numberOfPeopleContainer.html(model.getNumberOfGuests());

  // Populate the overview with main dishes, for now
  model.getFullMenu().forEach(data => {
    console.log("data", data);
    var dish = new DishItem(data, model);
    $(overViewBodyContainer).append(dish);
  });

  // populate price field
  var price = model.getTotalMenuPrice();
  priceContainer.html(price);
}