/**
 * 
 */
var MenuOverviewView = function(container, model) {

  var numberOfPeopleContainer = container.find("#numberOfGuests");
  var overViewBodyContainer   = container.find("#overview__body");
  var priceContainer          = container.find("#totalMenuPrice");

  // update number of people
  numberOfPeopleContainer.html(model.getNumberOfGuests());

  // Populate the overview with main dishes, for now
  model.getAllDishes('main dish').forEach(data => {
    console.log("data", data);
    var dish = new DishItem(data, model);
    $(overViewBodyContainer).append(dish);
  });

  // populate price field
  var price = model.getTotalMenuPrice();
  priceContainer.html(price);
}