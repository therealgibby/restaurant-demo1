window.onscroll = function () {
	applyStickyNavbar();
};

const navbar = document.querySelector(".navbar");
const themeMetatag = document.querySelector(`meta[name="theme-color"]`);

function applyStickyNavbar() {
	if (window.scrollY > 0) {
		navbar.classList.add("navbar-sticky");
		themeMetatag.setAttribute("content", "#ffffff");
	} else {
		navbar.classList.remove("navbar-sticky");
		themeMetatag.setAttribute("content", "#f54916");
	}
}
