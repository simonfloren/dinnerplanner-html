class DishDetails {

    constructor(container, model) {
        console.info("[dishDetailsView] Initializing..");

        if (typeof container === 'undefined') {
            console.error("Undefined container");
            return;
        }

        this.model = model;
        this.container = container;

        this.isLoading = true;
        this.dish = {};

        //get dom elements
        this.loading = document.querySelector("#dishDetailsLoading");
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
    render() {
        const id = this.dish.id;

        let newTable = this.table.cloneNode(false);

        console.log("[dishDetails] Rendering dish:", id);
        // Get data
        let totGuests = this.model.getNumberOfGuests();

        if(this.isLoading) {
            this.loading.removeAttribute('display');
            this.container.setAttribute('display', 'none');
        } else {
            this.loading.setAttribute('display', 'none');
            this.container.removeAttribute('display');

            let ing = this.dish.extendedIngredients;
            let totPrice = this.dish.pricePerServing * totGuests;
            

            // Render details
            this.image.src = this.dish.image;
            this.name.textContent = this.dish.title;
            this.description.textContent = this.dish.instructions;
            this.addBtn.value = id;

            // Render ingredients card
            this.guests.textContent = totGuests;
            ing.forEach(ingredient => {
                let clone = this.template.cloneNode(true);
                clone.querySelector('#ingredient-unit').textContent = (ingredient.amount * totGuests) + ' ' + ingredient.unit;
                clone.querySelector('#ingredient-name').textContent = ingredient.name;
                //clone.querySelector('#ingredient-price').textContent  = ingredient.price * totGuests;
                clone.querySelector('#ingredient-price').textContent  = "?";
                newTable.appendChild(clone);
            });
            this.price.textContent = totPrice;

            // Remove template with cloned table
            this.table.parentNode.replaceChild(newTable, this.table);
            this.table = newTable;
        }
    }

    updateGuests() {
        let guests = this.model.getNumberOfGuests();
        this.price.textContent = guests * this.dish.pricePerServing;
        //this.table.querySelector()
    }

    updateDish(id) {
        this.isLoading = true;
        this.render();

        this.model.getDish(id).then(dish => {
            this.dish = dish;
            this.isLoading = false;
            this.render();
        }).catch(error => {
            /* do something with the error */
        });
    }

    update(details) {
        if(details === "guests") {
            console.info("[dishDetails] Update");
            this.updateGuests();
        }
        //this.render(this.currentDish);
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
        //this.render(id);
    }

};