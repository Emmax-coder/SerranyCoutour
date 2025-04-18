// Get modal elements
const modal = document.getElementById('fullscreen-modal');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeModal = document.querySelector('.close-modal');

// Add click event to all images
document.querySelectorAll('.explore-image').forEach(image => {
    image.addEventListener('click', () => {
        fullscreenImage.src = image.src; // Set the clicked image as the fullscreen image
        modal.style.display = 'flex'; // Show the modal
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});