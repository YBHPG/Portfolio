/* "Back to top" button */

mybutton = document.getElementsByClassName("top_button")[0];

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    /* mybutton.style.display = "flex"; */
    mybutton.classList.add("appear");
  } else {
    /* mybutton.style.display = "none"; */
    mybutton.classList.remove("appear");
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
