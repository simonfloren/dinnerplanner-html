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
    render() {
        // changeDetails will contain the dish id
        // When the user is routed to this view by the controller
        // We should try to pass the changedetails

        // then we can get the description and name and prep
        // but not image link

        this.guests.val(model.getNumberOfGuests());
        this.image.src = ""; // Send in data here, method to do so not implemented yet    
        this.name.html(); // Send in data here, method to do so not implemented yet  
        this.description.html(); // Send in data here, method to do so not implemented yet
    }

    update() {
        this.render();
    }

    hideView() {
        this.container.setAttribute('display', 'none');
        this.model.removeObserver(this.update);
    }

    showView() {
        this.container.removeAttribute('display');
        this.model.addObserver(this.update);
        this.render();
    }

};