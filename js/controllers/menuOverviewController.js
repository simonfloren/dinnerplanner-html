/**
 * Author: Simon TranFloren
 */
class MenuOverviewController {

    // gsc will be changed later to callback
    constructor(view, stateCtrl) {
        console.info("[menuOverviewController] Initializing..");

        view.printBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("print button pressed");
            stateCtrl.changeState("printout");
        });
    }
}