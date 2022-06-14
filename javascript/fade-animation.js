// start with opacity 0 on page load
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function () {
        document.body.classList.add("fade");
    }, 500);
});

var workButton = document.getElementById("fade-out_work-button");   // "work" header button
var aboutButton = document.getElementById("fade-out_about-button"); // "About" header button
var pagePath = window.location.pathname;    // getting page URL    
var pageName = pagePath.split("#").shift(); //Splitting page URL and getting the bit after last "/"
var siteBody = document.getElementsByTagName('body');   // get body

// fade out from "Work"
function fadeOutWork() {
    document.body.classList.remove("fade");
    document.body.classList.add("fadeOut");
    window.setTimeout(function () {
        if (pageName.includes('ru')) {
            window.location.href = "/html/about-ru.html";
        } else if (pageName.includes('en')) {
            window.location.href = "/html/about-en.html";
        }
    }, 1000);
}

// fade out from "About"
function fadeOutAbout() {
    document.body.classList.remove("fade");
    document.body.classList.add("fadeOut");
    window.setTimeout(function () {
        if (pageName.includes('ru')) {
            window.location.href = "/html/index-ru.html";
        } else if (pageName.includes('en')) {
            window.location.href = "/html/index-en.html";
        }
    }, 1000);
}

// logic for menu buttons fade out
window.onclick = function (event) {
    if (event.target === workButton) {
        fadeOutWork();
    } else if (event.target === aboutButton) {
        fadeOutAbout();
    }
}

// fade out on reload
window.onbeforeunload = function (event) {
    document.body.classList.remove("fade");
    document.body.classList.add("fadeOut");
    window.setTimeout(function () {
        console.log('wait: fading out');
    }, 1000);
}

// fade in burger menu from top
function fadeInBurger() {
    var menuBody = document.getElementsByClassName("menu__body");
    for (var i = 0; i < menuBody.length; i++) {
        if (menuBody[0].classList.contains("fade")) {
            menuBody[0].classList.remove("fade");
            menuBody[0].style.top = "-100%";
            menuBody[0].style.opacity = "0";
            siteBody[0].style.overflow = "auto";
        } else {
            menuBody[0].classList.add("fade");
            menuBody[0].style.top = "0px";
            menuBody[0].style.opacity = "1";
            siteBody[0].style.overflow = "hidden";
        }

        if (menuBody[0].classList.contains("black")) {
            menuBody[0].style.backgroundColor = "rgba(27, 28, 36, 1)";
        }
    }
}

function fadeModalWindow(index) {
    var modalWindow = document.getElementsByClassName('modal');
    if (index === 11) {
        modalWindow[0].style.display = "block";
        modalWindow[0].classList.add('fadeOut');
        siteBody[0].style.overflow = "hidden";
    } else if (index === 12) {
        modalWindow[1].style.display = "block";
        modalWindow[1].classList.add('fadeOut');
        siteBody[0].style.overflow = "hidden";
    } if (index === 21) {
        modalWindow[0].style.display = "none";
        siteBody[0].style.overflow = "auto";
    }
}