/*
Landing theme VvvebJs editor integration
*/ 

//Revert theme default styles for non changeable elements on editor page save

$(window).on("vvveb.getHtml.before", function (e,doc) {
	//remove sticky class from navbar
	if (doc.defaultView.navbarSticky){
		doc.defaultView.navbarSticky(false);
	}
	//$(".navbar", doc).removeClass("sticky");
	//doc.defaultView.scrollTo(0,0);
	
	//set theme color scheme to auto 
	$("html[data-bs-theme]", doc).attr("data-bs-theme", "auto");
	
	//make sure not dropdown is saved as open
	$(".dropdown-toggle.show, .dropdown-menu.show", doc).removeClass("show");
});
