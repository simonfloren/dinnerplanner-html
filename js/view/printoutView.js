/**
 * 
 */
class PrintoutView {
  constructor(container, model) {
    
  }
  if(typeof container === 'undefined') {
    console.error("Undefined container");
    return;
  }
  let numberOfPeopleContainer = container.find("#numberOfGuests");

  // update number of people
  numberOfPeopleContainer.html(model.getNumberOfGuests());
}