class HeaderController {

    constructor(view, stateCtrl) {
        console.info("[headerController] Initializing..");

        view.title.addEventListener('click', () => {
            console.log("Title pressed");
            stateCtrl.changeState("welcome");
          });
    }
}