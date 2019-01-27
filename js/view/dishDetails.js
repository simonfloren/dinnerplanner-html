var DishDetails = function(container, model) {
    this.image = container.find('#detail-img');

    var description = container.find('#description');

    var ingredients = container.find('#ingredient-table');

    this.addButton = container.find('#addDishBtn');

    var price = container.find('#dish-price');

    var guests = container.find('#numberOfGuests');
    guests.val(model.getNumberOfGuests());
};