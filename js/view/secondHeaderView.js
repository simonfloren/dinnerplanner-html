class SecondHeaderView {

    constructor(container, model) {
        console.info("[secondHeaderView] Initializing..");

        if (typeof container === 'undefined') {
            console.error("Undefined container");
            return;
        }

        this.model = model;
        this.container = container;

        //get dom elements
        this.numGuests = container.querySelector('#numberOfGuests');
        this.backBtn = container.querySelector('#backBtn');
    }

    render() {
        this.numGuests.textContent = this.model.getNumberOfGuests();
    }

    update() {
        console.info("[secondHeader] Update");
        this.render();
    }

    hideView() {
        console.info("[secondHeader] Hide");
        this.container.setAttribute('display', 'none');
        this.model.removeObserver(this);
    }

    showView() {
        console.info("[secondHeader] Show");
        this.container.removeAttribute('display');
        this.model.addObserver(this);
        this.render();
    }

}