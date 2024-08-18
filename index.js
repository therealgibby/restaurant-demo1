window.onscroll = function () {
	applySticky();
};

const navbar = document.querySelector(".navbar");

function applySticky() {
	if (window.scrollY > 0) {
		navbar.classList.add("navbar-sticky");
	} else {
		navbar.classList.remove("navbar-sticky");
	}
}
