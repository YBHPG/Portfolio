const area = document.getElementById('view-area');
const text = document.getElementById('text-container');

window.onmousemove = e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const decimalX = mouseX / window.innerWidth;
    const decimalY = mouseY / window.innerHeight;

    const maxX = area.offsetWidth - window.innerWidth;
    const maxY = area.offsetHeight - window.innerHeight;

    const panX = maxX * decimalX * -1;
    const panY = maxY * decimalY * -1;

    area.animate({
        transform: `translate(${panX}px, ${panY}px)`
    },
        {
            duration: 4000,
            fill: 'forwards',
            easing: 'ease'
        });
}
