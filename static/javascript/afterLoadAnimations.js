const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = (e.clientY - 22) + "px";
});

let links = Array.from(document.querySelectorAll('a'));
console.log(links)
links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('grow');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    });
})