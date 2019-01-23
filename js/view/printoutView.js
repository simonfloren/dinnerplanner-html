/**
 * 
 */
var PrintoutView = function(container, model) {
  var numberOfPeopleContainer = container.find("#numberOfGuests");

  // update number of people
  numberOfPeopleContainer.html(model.getNumberOfGuests());
}