window.onload = function() {
	//We instantiate our model
	const model = new DinnerModel();

	let currentScreen = "search-dish";
	let prevScreen = "";

	const sidebarView = new SidebarView(document.querySelector("#sidebar"), model);
	const sidebarController = new SidebarController(sidebarView, model);

	const dishSearch = new DishSearchView(document.querySelector("#dishSearch"), model);

	const menuOverView = new MenuOverviewView(document.querySelector("#overview-page"), model);

	const printoutView = new PrintoutView(document.querySelector("#printout-container"), model);

	const dishDetails = new DishDetails(document.querySelector("#dishDetails"), model);

	const changeState = () => {
		console.info("Current view:", currentScreen);
		// Tear down 
		switch(prevScreen) {
			case "welcome":
				// Run "destructuring"-function
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
		}

		// Start relevant listeners
		switch(currentScreen) {
			case "welcome":
				// run constructor
				break;

			case "search-dish":
				dishSearch.showView();
				sidebarView.showView();
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

	changeState();
};