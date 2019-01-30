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
        this.backBtn = container.querySelector('#backSearchBtn');
        this.addBtn = container.querySelector('#addDishBtn');
        this.image = container.querySelector('#detail-img');
        this.name = container.querySelector('#dishName');
        this.description = container.querySelector('#description');
        this.guests = container.querySelector('#numberOfGuests');
        this.price = container.querySelector('#dish-price');
        this.table = container.querySelector('#ingredient-table');
        this.template = container.querySelector('#ingredient-row-template').cloneNode(true);

        //this.emptyTable = this.table.cloneNode(false);

        // function variable
        this.currentDish = 0;
    }

    // Simple
    render(id) {
        this.currentDish = id;

        let newTable = this.table.cloneNode(false);

        console.log("[dishDetails] Rendering dish:", id);
        // Get data
        let totGuests = this.model.getNumberOfGuests();
        let dish = this.model.getDish(id);
        let totPrice = this.model.getDishPrice(dish) * totGuests;

        // Render details
        this.image.src = "images/" + dish.image; // Send in data here, method to do so not implemented yet    
        this.name.textContent = dish.name; // Send in data here, method to do so not implemented yet  
        this.description.textContent = dish.description; // Send in data here, method to do so not implemented yet
        this.addBtn.value = id;

        // Render ingredients card
        this.guests.textContent = totGuests;
        let ing = dish.ingredients;
        ing.forEach(ingredient => {
            let clone = this.template.cloneNode(true);
            clone.querySelector('#ingredient-unit').textContent = (ingredient.quantity * totGuests) + ' ' + ingredient.unit;
            clone.querySelector('#ingredient-name').textContent = ingredient.name;
            clone.querySelector('#ingredient-price').textContent  = ingredient.price * totGuests;
            newTable.appendChild(clone);
        });
        this.price.textContent = totPrice;

        // Remove template with cloned table
        this.table.parentNode.replaceChild(newTable, this.table);
        this.table = newTable;
    }

    update() {
        console.info("[dishDetails] Update");
        this.render(this.currentDish);
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