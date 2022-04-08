var aboutContent = document.getElementById('about-content');
var aboutTab = document.getElementById('about-tab');

aboutTab.addEventListener('click', function() {
    toggleVisibility(aboutContent);
})

var aboutContent = document.getElementById('reservations-content');
var aboutTab = document.getElementById('reservations-tab');

aboutTab.addEventListener('click', function() {
    toggleVisibility(aboutContent);
})

reservationsTab.addEventListener('click', function() {
    toggleVisibility(reservationsContent);
})

contactTab.addEventListener('click', function() {
    toggleVisibility(contactContent);
})

function toggleVisibility(element) {
    if (element.className === 'hidden') {
        element.className = 'visible';
    } else {
        element.className = 'hidden';
    }
}
