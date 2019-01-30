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
        this.template = container.querySelector('#ingredient-row-template').cloneNode(true);

        const clonedTable = this.table.cloneNode(false);
        // Remove template with empty cloned table
        this.table.parentNode.replaceChild(clonedTable, this.table);
        this.table = clonedTable;
    }

    // Simple
    render(id) {
        // Get data
        let totGuests = this.model.getNumberOfGuests();
        let dish = this.model.getDish(id);
        let totPrice = this.model.getDishPrice(dish) * totGuests;

        // Render details
        this.image.src = "images/" + dish.image; // Send in data here, method to do so not implemented yet    
        this.name.textContent = dish.name; // Send in data here, method to do so not implemented yet  
        this.description.textContent = dish.description; // Send in data here, method to do so not implemented yet

        // Render ingredients card
        this.guests.textContent = totGuests;
        let ing = dish.ingredients;
        ing.forEach(ingredient => {
            let clone = this.template.cloneNode(true);
            clone.querySelector('#ingredient-unit').textContent = (ingredient.quantity * totGuests) + ' ' + ingredient.unit;
            clone.querySelector('#ingredient-name').textContent = ingredient.name;
            clone.querySelector('#ingredient-price').textContent  = ingredient.price * totGuests;
            this.table.appendChild(clone);
        });
        this.price.textContent = totPrice;
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