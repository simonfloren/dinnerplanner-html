window.onload = function() {
	//We instantiate our model
	const model = new DinnerModel();

	// // And create the instance of ExampleView
	// var exampleView = new ExampleView($("#exampleView"));

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

	const sidebarView = new SidebarView($("#sidebar"), model);
	console.log("side", sidebarView);
	const sidebarController = new SidebarController(sidebarView, model);

	const dishSearch = new DishSearchView($('#dishSearch'), model);

	const menuOverView = new MenuOverviewView($('#overview'), model);

	const printoutView = new PrintoutView($('#printout-container'), model);

	const dishDetails = new DishDetails($(''), model)
};