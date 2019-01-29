window.onload = function() {
	//We instantiate our model
	const model = new DinnerModel();

	let currentScreen = "";
	let prevScreen = "";

	const exampleView = new ExampleView(document.querySelector("#exampleView"));

	const sidebarView = new SidebarView(document.querySelector("#sidebar"));
	const sidebarController = new SidebarController(sidebarView, model);

	const dishSearch = new DishSearchView(document.querySelector("#dishSearch"));

	const menuOverView = new MenuOverviewView(document.querySelector("#overview"));

	const printoutView = new PrintoutView(document.querySelector("#printout-container"));

	const dishDetails = new DishDetails(document.querySelector("#dishDetails"));


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