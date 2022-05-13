document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function () {
        document.body.classList.add("fade");
    }, 500);
});

var workButton = document.getElementById("fade-out_work-button");
var aboutButton = document.getElementById("fade-out_about-button");
var pagePath = window.location.pathname;
var pageName = pagePath.split("#").shift();

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

window.onclick = function (event) {
    if (event.target = workButton) {
        fadeOutWork();
    } else if (event.target = aboutButton) {
        fadeOutAbout();
    }
}

window.onbeforeunload = function (event) {
    document.body.classList.remove("fade");
    document.body.classList.add("fadeOut");
    window.setTimeout(function () {
        console.log('wait: fading out');
    }, 1000);
}
