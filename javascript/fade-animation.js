document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function () {
        document.body.classList.add("fade");
    }, 500);
});

var workButton = document.getElementById("fade-out_work-button");
var aboutButton = document.getElementById("fade-out_about-button");

/* window.onclick = function (event) {
    if (event.target == myButton) {
        window.setTimeout(function () {
            document.body.classList.remove("fade");
            document.body.classList.add("fadeOut");
            console.log(event.target);
        }, 500);
    }
} */

function fadeOutWork() {
    document.body.classList.remove("fade");
    document.body.classList.add("fadeOut");
    console.log("hello2");
    window.setTimeout(function () {
        window.location.href = "../about.html";
    }, 1000);
}

function fadeOutAbout() {
    document.body.classList.remove("fade");
    document.body.classList.add("fadeOut");
    console.log("hello2");
    window.setTimeout(function () {
        window.location.href = "../index.html";
    }, 1000);
}

window.onclick = function (event) {
    if (event.target = workButton) {
        fadeOut();
    } else if (event.target = aboutButton) {
        fadeOutAbout();
    }
}
