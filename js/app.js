$(function () {
	//We instantiate our model
	var model = new DinnerModel();

	// // And create the instance of ExampleView
	// var exampleView = new ExampleView($("#exampleView"));

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

	var sidebarView = new SidebarView($("#sidebar"), model);
	sidebarView.init();
	console.log("side", sidebarView);
	var sidebarController = new SidebarController(sidebarView, model);

	var dishSearch = new DishSearchView($('#dishSearch'), model);

	var menuOverView = new MenuOverviewView($('#overview'), model);

	var printoutView = new PrintoutView($('#printout-container'), model);

	var dishDetails = new DishDetails($(''), model)
});