var filterButtonsContainer = document.getElementsByClassName('block-2__filter-buttons__container')[0];
filterButtonsContainer.addEventListener('mouseover', (event) => {
    var colorArray = ['rgba(124, 244, 221, 1)', 'rgba(124, 201, 244, 1)'];
    var filterButtons = document.getElementsByClassName('block-2__filter-buttons');
    for (let i = 0; i < filterButtons.length; i++) {
        if (filterButtons[i].matches(':hover')) {
            filterButtons[i].style.backgroundColor = `${colorArray[(Math.floor(Math.random() * 2))]}`;
        }
    }
});

filterButtonsContainer.addEventListener('mouseout', (event) => {
    var filterButtons = document.getElementsByClassName('block-2__filter-buttons');
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].style.background = '#e8e8e8';
    }
});