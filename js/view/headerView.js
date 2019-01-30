class HeaderView {

    constructor(container, model) {
        console.info("[headerView] Initializing..");

        if (typeof container === 'undefined') {
            console.error("Undefined container");
            return;
        }

        this.model = model;
        this.container = container;

        //get dom elements
        this.title = container.querySelector('#title');
    }

    /* render() {

    }

    update() {
        console.info("[headerView] Update");
        this.render();
    } */

    // Never used
    /* hideView() {
        console.info("[headerView] Hide");
        this.container.setAttribute('display', 'none');
        this.model.removeObserver(this);
    } */

    /* showView() {
        console.info("[headerView] Show");
        //this.container.removeAttribute('display');
        //this.model.addObserver(this);
        this.render();
    } */
}