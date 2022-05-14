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

// fade out from "Work"
function fadeOutWork() {
    document.body.classList.remove("fade");
    document.body.classList.add("fadeOut");
    window.setTimeout(function () {
        if (pageName.includes('ru')) {
            window.location.href = "../html/about-ru.html";
        } else if (pageName.includes('en')) {
            window.location.href = "../html/about-en.html";
        }
    }, 1000);
}

// fade out from "About"
function fadeOutAbout() {
    document.body.classList.remove("fade");
    document.body.classList.add("fadeOut");
    window.setTimeout(function () {
        if (pageName.includes('ru')) {
            window.location.href = "../html/index-ru.html";
        } else if (pageName.includes('en')) {
            window.location.href = "../html/index-en.html";
        }
    }, 1000);
}

// logic for menu buttons fade out
window.onclick = function (event) {
    if (event.target = workButton) {
        fadeOutWork();
    } else if (event.target = aboutButton) {
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


// fade in burger menu from left
/* function fadeInBurger() {
    var menu_body = document.getElementsByClassName("menu__body");
    if (menu_body[0].style.left == "0px") {
        menu_body[0].style.left = "-100%";
    } else {
        menu_body[0].style.left = "0";
    }
} */


// fade in burger menu from top
function fadeInBurger() {
    var menu_body = document.getElementsByClassName("menu__body");
    for (var i = 0; i < menu_body.length; i++) {
        if (menu_body[0].classList.contains("fade")) {
            menu_body[0].classList.remove("fade");
            menu_body[0].style.top = "-100%";
            menu_body[0].style.opacity = "0";
        } else {
            menu_body[0].classList.add("fade");
            menu_body[0].style.top = "0px";
            menu_body[0].style.opacity = "1";
        }

        if (menu_body[0].classList.contains("black")) {
            menu_body[0].style.backgroundColor = "rgba(27, 28, 36, 1)";
        }
    }
}