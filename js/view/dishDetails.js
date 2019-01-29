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
    }

    // Simple
    render(model, changeDetails) {
        // changeDetails will contain the dish id
        // When the user is routed to this view by the controller
        // We should try to pass the changedetails

        // then we can get the description and name and prep
        // but not image link

        guests.val(model.getNumberOfGuests());
        image.src = ""; // Send in data here, method to do so not implemented yet    
        name.html(); // Send in data here, method to do so not implemented yet  
        description.html(); // Send in data here, method to do so not implemented yet
    }

    update() {
        render();
    }

    hideView() {
        container.setAttribute('display', 'none');
        model.removeObserver(this.update);
    }

    showView() {
        container.removeAttribute('display');
        model.addObserver(this.update);
        render(model);
    }

};