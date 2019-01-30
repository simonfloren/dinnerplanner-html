/**
 * The heart of the Dinner planner app
 * Author: Albin Winkelmann, Simon TranFloren
 */

window.onload = function() {
	//We instantiate our model
	const model = new DinnerModel();

	let currentScreen = "printout";
	let prevScreen = "";

	let selectedDish = 0;

	const welcomeView = new WelcomeView(document.querySelector("#welcome-page"));
	const welcomeController = new WelcomeController(welcomeView, this);

	const sidebarView = new SidebarView(document.querySelector("#sidebar"), model);
	const sidebarController = new SidebarController(sidebarView, model, this);

	//sidebarView.showView();

	const dishSearch = new DishSearchView(document.querySelector("#dishSearch"), model);
	const dishSearchController = new DishSearchController(dishSearch, model, this);

	const menuOverView = new MenuOverviewView(document.querySelector("#overview-page"), model);

	const printoutView = new PrintoutView(document.querySelector("#printout-page"), model);

	const dishDetails = new DishDetails(document.querySelector("#dishDetails"), model);
	
	const secondHeader = new SecondHeaderView(document.querySelector('#dinner-header'), model);

	this.changeState = (newScreen) => {
		if(typeof newScreen !== 'undefined') {
			prevScreen = currentScreen;
			currentScreen = newScreen;
		}

		console.info("Current view:", currentScreen);
		// Tear down 
		switch(prevScreen) {
			case "welcome":
				welcomeView.hideView();
				break;

			case "search-dish":
				// Run "destructuring"-function
				break;

			case "menu-overview":
				// Run "destructuring"-function
				break;

			case "dish-details":
				// Run "destructuring"-function
				break;

			case "printout":
				// Run "destructuring"-function
				break;
		}

		// Start relevant listeners
		switch(currentScreen) {
			case "welcome":
				welcomeView.showView();
				break;

			case "search-dish":
				dishSearch.showView();
				sidebarView.showView();
				break;

			case "menu-overview":
				secondHeader.showView();
				menuOverView.showView();
				break;

			case "dish-details":
				secondHeader.showView();
				sidebarView.showView();
				dishDetails.showView();
				break;

			case "printout":
				secondHeader.showView();
				printoutView.showView();
				break;
		}
	};

	this.changeState();
};