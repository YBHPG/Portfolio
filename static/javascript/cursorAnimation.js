const cursor = document.querySelector(".cursor");
const trailingCursor = document.getElementById("trailing-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = (e.clientY - 22) + "px";

    setTimeout(() => {
        trailingCursor.style.left = e.clientX + "px";
        trailingCursor.style.top = (e.clientY - 12) + "px";
    }, 100);
});

let links = Array.from(document.querySelectorAll('a'));
console.log(links)
links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('grow');
        trailingCursor.classList.add('grow');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        trailingCursor.classList.remove('grow');
    });
})