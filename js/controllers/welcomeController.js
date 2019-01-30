/**
 *  Welcome controller
 *  Author: Albin Winkelmann
 * 
 *  @param {Node} view - reference to corresponding view
 *  @param {Object} stateCtrl - reference to general state controller
 */
class WelcomeController {
  constructor(view, stateCtrl) {
    console.info("[welcomeController] Initializing..");

    view.button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("[welcomeController] Start dinner button pressed");
      stateCtrl.changeState("search-dish");
    });
  }
}