/**
 * 
 */
let MenuOverviewView = function(container, model) {
  if(typeof container === 'undefined') {
    console.error("Undefined container");
    return;
  }

  let numberOfPeopleContainer = container.find("#numberOfGuests");
  let overViewBodyContainer   = container.find("#printCards");
  let priceContainer          = container.find("#totalPrice");

  // update number of people
  numberOfPeopleContainer.html(model.getNumberOfGuests());

  // Populate the overview with main dishes, for now
  model.getFullMenu().forEach(data => {
    console.log("data", data);
    let dish = new DishItem(data, model);
    overViewBodyContainer.append(dish);
  });

  // populate price field
  let price = model.getTotalMenuPrice();
  priceContainer.html(price);
}