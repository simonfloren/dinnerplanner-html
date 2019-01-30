/**
 * The heart of the Dinner planner app
 * Author: Albin Winkelmann, Simon TranFloren
 */

window.onload = function() {
	//We instantiate our model
	const model = new DinnerModel();

	let currentScreen = "dish-details";
	let prevScreen = "";

	let selectedDish = 0;

	// Initialize all the views with the corresponding controllers
	const welcomeView = new WelcomeView(document.querySelector("#welcome-page"));
	const welcomeController = new WelcomeController(welcomeView, this);

	const sidebarView = new SidebarView(document.querySelector("#sidebar"), model);
	const sidebarController = new SidebarController(sidebarView, model, this);

	const dishSearch = new DishSearchView(document.querySelector("#dishSearch"), model, this);
	const dishSearchController = new DishSearchController(dishSearch, model, this);

	const menuOverView = new MenuOverviewView(document.querySelector("#overview-page"), model);
	const menuOverviewController = new MenuOverviewController(menuOverView, this);

	const printoutView = new PrintoutView(document.querySelector("#printout-page"), model);

	const dishDetails = new DishDetails(document.querySelector("#dishDetails"), model);
	
	const secondHeader = new SecondHeaderView(document.querySelector('#dinner-header'), model);
	const secondHeaderController = new SecondHeaderController(secondHeader, this);

	// State controller 
	this.changeState = newScreen => {
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
				dishSearch.hideView();
				sidebarView.hideView();
				break;

			case "menu-overview":
				menuOverView.hideView();
				secondHeader.hideView();
				break;

			case "dish-details":
				dishDetails.hideView();
				sidebarView.hideView();
				break;

			case "printout":
				secondHeader.hideView();
				printoutView.hideView();
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
				sidebarView.showView();
				dishDetails.showView(selectedDish);
				break;

			case "printout":
				secondHeader.showView();
				printoutView.showView();
				break;
		}
	};

	this.viewDish = id => {
		selectedDish = id;
		this.changeState("dish-details");
	}

	this.changeState();
};