/**
 * Author: Simon TranFloren
 */
class menuOverviewController {

    // gsc will be changed later to callback
    constructor(view, model, gsc) {
        console.info("[menuOverviewController] Initializing..");

        view.printBtn.addEventListener('click', () => {
            console.log("print button pressed");
            
            gsc.changeState();
        });
    }
}