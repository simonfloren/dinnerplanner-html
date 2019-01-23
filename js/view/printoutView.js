/**
 * 
 */
var PrintoutView = function(container, model) {
  if(typeof container === 'undefined') {
    console.error("Undefined container");
    return;
  }
  var numberOfPeopleContainer = container.find("#numberOfGuests");

  // update number of people
  numberOfPeopleContainer.html(model.getNumberOfGuests());
}