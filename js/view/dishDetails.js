class DishDetails {

    constructor(container, model) {
        console.info("[dishDetailsView] Initializing..");

        if (typeof container === 'undefined') {
            console.error("Undefined container");
            return;
        }

        this.model = model;
        this.container = container;

        //get dom elements
        this.image = container.find('#detail-img');
        this.name = container.find('#dishName');
        this.description = container.find('#description');
        this.guests = container.find('#numberOfGuests');
        this.price = container.find('#dish-price');

        model.addObserver(this.update);

        render(model);
    }

    // Simple
    render = function (model) {
        guests.val(model.getNumberOfGuests());
        image.src = ""; // Send in data here, method to do so not implemented yet    
        name.html(); // Send in data here, method to do so not implemented yet  
        description.html(); // Send in data here, method to do so not implemented yet
    }

    update = function () {
        render();
    }

    removeView = function () {
        model.removeObserver(this.update);
    }

};