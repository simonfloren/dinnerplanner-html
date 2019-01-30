/**
 * Welcome View
 *
 * @param {Node} container - references the HTML parent element that contains the view.
 */
class WelcomeView {

  constructor(container) {
    console.info("[welcomeView] Initializing..");
    this.container = container;
    this.button = container.querySelector('#button');
  }

  hideView() {
    console.info("[welcomeView] Hide");
    this.container.setAttribute('display', 'none');
  }

  showView() {
    console.info("[welcomeView] Show");
    this.container.removeAttribute('display');
  }
}