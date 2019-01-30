/**
 *  Welcome controller
 *  Author: Simon Florén
 * 
 *  @param {Node} view - reference to corresponding view
 *  @param {Object} stateCtrl - reference to general state controller
 */
class SecondHeaderController {

    constructor(view, stateCtrl) {
        console.info("[sndHeaderController] Initializing..");

        view.backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("[sndHeaderController] Go back and edit button pressed");
            stateCtrl.changeState("search-dish");
          });
    }
}