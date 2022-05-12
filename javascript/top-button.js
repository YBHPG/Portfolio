/* "Back to top" button */

myButtonLight = document.getElementsByClassName("top_button")[0];
myButtonDark = document.getElementsByClassName("top_button-dark")[0];

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (window.target = myButtonLight) {
		if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
			/* mybutton.style.display = "flex"; */
			myButtonLight.classList.add("appear");
		} else {
			/* mybutton.style.display = "none"; */
			myButtonLight.classList.remove("appear");
		}
	} else if (window.target = myButtonDark) {
		if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
			/* mybutton.style.display = "flex"; */
			myButtonDark.classList.add("appear");
		} else {
			/* mybutton.style.display = "none"; */
			myButtonDark.classList.remove("appear");
		}
	}

}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
