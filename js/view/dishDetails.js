var DishDetails = function (container, model) {
  this.image = container.find('#detail-img');

    var name = container.find('#dishName');
    name.html(); // Send in data here, method to do so not implemented yet

    var description = container.find('#description');
    description.html();

  var ingredients = container.find('#ingredient-table');

    var price = container.find('#dish-price');

    var guests = container.find('#numberOfGuests');
    guests.val(model.getNumberOfGuests());

  // Simple
  this.update = function (model) {
    guests.val(model.getNumberOfGuests());
  }

  model.addObserver(this.update);
};