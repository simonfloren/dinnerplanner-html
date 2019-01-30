window.onload = function() {
	//We instantiate our model
	const model = new DinnerModel();

	let currentScreen = "";
	let prevScreen = "";

	let selectedDish = 0;

	const sidebarView = new SidebarView(document.querySelector("#sidebar"), model);
	const sidebarController = new SidebarController(sidebarView, model, this);

	//sidebarView.showView();

	const dishSearch = new DishSearchView(document.querySelector("#dishSearch"), model);
	// dishSearch.showView();

	const menuOverView = new MenuOverviewView(document.querySelector("#overview-page"), model);
	menuOverView.showView();

	const printoutView = new PrintoutView(document.querySelector("#printout-container"), model);

	const dishDetails = new DishDetails(document.querySelector("#dishDetails"), model);
	//dishDetails.showView(1);

	const changeState = () => {
		// Tear down 
		switch(prevScreen) {
			case "welcome":
				// Run "destructuring"-function
				break;

			case "search-dish":
				// Run "destructuring"-function
				break;

			case "menu-overview":
				break;

			case "dish-details":
				// Run "destructuring"-function
				break;
		}

		// Start relevant listeners
		switch(currentScreen) {
			case "welcome":
				// run constructor
				break;

			case "search-dish":
				// run constructor
				break;

			case "menu-overview":
				// run constructor
				menuOverView.init();
				break;

			case "dish-details":
				// run constructor
				break;
		}

		prevScreen = currentScreen;

	};
};