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
        this.image = container.querySelector('#detail-img');
        this.name = container.querySelector('#dishName');
        this.description = container.querySelector('#description');
        this.guests = container.querySelector('#numberOfGuests');
        this.price = container.querySelector('#dish-price');
        this.table = container.querySelector('#ingredient-table');
    }

    // Simple
    render(id) {
        // Get data
        let totGuests = this.model.getNumberOfGuests();
        let dish = this.model.getDish(id);

        // Render details
        this.image.src = "images/" + dish.image; // Send in data here, method to do so not implemented yet    
        this.name.textContent = dish.name; // Send in data here, method to do so not implemented yet  
        this.description.textContent = dish.description; // Send in data here, method to do so not implemented yet

        // Render ingredients
        this.guests.textContent = totGuests;
        let price = this.model.getDishPrice(dish) * totGuests;
        let ing = dish.ingredients;
        let copy = 
        ing.forEach(ingredient => {
            
        });
    }

    update() {
        console.info("[dishDetails] Update");
        this.render();
    }

    hideView() {
        console.info("[dishDetails] Hide");
        this.container.setAttribute('display', 'none');
        this.model.removeObserver(this);
    }

    showView(id) {
        console.info("[dishDetails] Show");
        this.container.removeAttribute('display');
        this.model.addObserver(this);
        this.render(id);
    }

};