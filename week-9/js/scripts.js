// JavaScript to go here
document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.getElementById('toggle-menu');
    const closeButton = document.getElementById('close');
    const hamburger = document.getElementById('hamburger');

    toggleMenu.addEventListener('change', function() {
        if (toggleMenu.checked) {
            // Show the menu
            document.querySelector('nav ul').style.left = '0'; // Show the menu
            hamburger.style.display = 'none'; // Hide hamburger
            closeButton.style.display = 'block'; // Show close button
        } else {
            // Hide the menu
            document.querySelector('nav ul').style.left = '100%'; // Hide the menu
            hamburger.style.display = 'block'; // Show hamburger
            closeButton.style.display = 'none'; // Hide close button
        }
    });

    closeButton.addEventListener('click', function() {
        toggleMenu.checked = false; // Uncheck the checkbox
        toggleMenu.dispatchEvent(new Event('change')); // Trigger the change event
    });
});