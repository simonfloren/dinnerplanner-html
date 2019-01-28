var DishDetails = function (container, model) {

    if (typeof container === 'undefined') {
        console.error("Undefined container");
        return;
    }

    // Public functions
    var update, removeView;

    // DOM Elements
    var $image, $name, $desc, $guests, $ingredients, $price;

    init = function () {
        $image = container.find('#detail-img');
        $name = container.find('#dishName');
        $description = container.find('#description');
        $guests = container.find('#numberOfGuests');
        $price = container.find('#dish-price');

        model.addObserver(this.update);

        render();
    }

    // Simple
    render = function (model) {
        guests.val(model.getNumberOfGuests());
        image.src = ""; // Send in data here, method to do so not implemented yet    
        name.html(); // Send in data here, method to do so not implemented yet  
        description.html(); // Send in data here, method to do so not implemented yet
    }

    this.removeView = function () {
        model.removeObserver(this.update);
    }

    update = function () {
        render();
    }

};