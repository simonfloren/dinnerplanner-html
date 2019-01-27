var DishDetails = function (container, model) {

    // Simple
    this.update = function (model) {
        guests.val(model.getNumberOfGuests());
    }

    this.removeView = function () {
        model.removeObserver(this.update);
    }

    if (typeof container === 'undefined') {
        console.error("Undefined container");
        return;
    }
    console.info("[dishDetails] Initializing..");

    this.image = container.find('#detail-img');
    image.src=""; // Send in data here, method to do so not implemented yet

    var name = container.find('#dishName');
    name.html(); // Send in data here, method to do so not implemented yet

    var description = container.find('#description');
    description.html(); // Send in data here, method to do so not implemented yet

    var guests = container.find('#numberOfGuests');
    guests.val(model.getNumberOfGuests());

    var ingredients = container.find('#ingredient-table');

    var price = container.find('#dish-price');

    model.addObserver(this.update);
};