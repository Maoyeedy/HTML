// Function 1
const button = document.getElementById('red-button');
const maoyeedy = document.getElementById('name');
const container = document.getElementById('container');
const left = document.getElementById('left');
const right = document.getElementById('right');

function toggleLeftPanel() {
    container.classList.toggle('show-left-panel');
}
function toggleRightPanel() {
    container.classList.toggle('show-right-panel');
}

maoyeedy.addEventListener('mouseover', toggleLeftPanel);
maoyeedy.addEventListener('mouseout', toggleLeftPanel);
// maoyeedy.addEventListener('click', toggleLeftPanel)
button.addEventListener('mouseover', toggleRightPanel);
button.addEventListener('mouseout', toggleRightPanel);
// button.addEventListener('click', toggleRightPanel)

left.addEventListener('mouseover', toggleLeftPanel);
left.addEventListener('mouseout', toggleLeftPanel);
right.addEventListener('mouseover', toggleRightPanel);
right.addEventListener('mouseout', toggleRightPanel);

// toggleLeftPanel();

// Function 2
const links = document.querySelectorAll('#main a');

links.forEach(link => {
    const layer = link.querySelector('.text-layer');

    layer.addEventListener('mouseover', () => {
        link.classList.add('hovered');
    });

    layer.addEventListener('mouseout', () => {
        link.classList.remove('hovered');
    });
});

// Function 3
let scrollStrength = 0.46; // Customize the scroll strength as desired

document.getElementById('main').addEventListener('wheel', function (event) {
    event.preventDefault(); // Prevent default scrolling behavior

    // Calculate the desired scroll distance based on scroll strength and viewport height
    var scrollAmount = window.innerHeight * scrollStrength;

    // Adjust the scroll position based on scroll direction
    if (event.deltaY > 0) {
        this.scrollTop += scrollAmount;
    } else {
        this.scrollTop -= scrollAmount;
    }
});