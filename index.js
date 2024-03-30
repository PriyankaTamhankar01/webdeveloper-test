document.addEventListener('DOMContentLoaded', function () {
    const slides = document.getElementById('slides');
    const slideWidth = document.querySelector('.slide-container').offsetWidth; // Adjusted to target the slide container
    const slideCount = slides.children.length;
    let currentIndex = 0;

    function showSlide(index) {
        const newPosition = -index * slideWidth;
        slides.style.transform = `translateX(${newPosition}px)`;
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
}); 


// Popup Newsletter
document.addEventListener('DOMContentLoaded', function() {
    const newsletterPopup = document.getElementById('newsletterPopup');
    const closeButton = document.getElementById('closeButton');
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const errorText = document.getElementById('errorText');
    const signUpButton = document.getElementById('submitButton');

    // Function to show the newsletter popup after a delay
    function showPopupWithDelay() {
        setTimeout(function() {
            newsletterPopup.classList.remove('hidden');
        }, 10000); // 10 seconds delay
    }

    // Function to close the newsletter popup
    function closePopup() {
        newsletterPopup.classList.add('hidden');
    }

    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        if (!email) {
            errorText.classList.remove('hidden');
        } else {
            // Handle form submission here
            // For example, you can send the form data to a server using fetch()
            // After handling the submission, close the popup
            closePopup();
            // Optionally, you can add code here to prevent the popup from showing again
            localStorage.setItem('newsletterSubscribed', 'true'); // Save a flag indicating the user has subscribed
        }
    }

    // Check if the user has already subscribed to the newsletter
    const isSubscribed = localStorage.getItem('newsletterSubscribed');
    if (!isSubscribed) {
        // Show the popup only if the user hasn't subscribed yet
        showPopupWithDelay();
    }

    closeButton.addEventListener('click', closePopup);

    newsletterForm.addEventListener('submit', function(event) {
        handleFormSubmission(event);
        // Optionally, you can add code here to prevent the popup from showing again
        localStorage.setItem('newsletterSubscribed', 'true'); // Save a flag indicating the user has subscribed
    });

    signUpButton.addEventListener('click', function(event) {
        // Call handleFormSubmission to handle form submission
        handleFormSubmission(event);
        // Close the popup after clicking the signup button
        closePopup();
    });
});


    // Header dropdown functionality
    document.getElementById('company-dropdown').addEventListener('click', function() {
        var menu = document.getElementById('company-menu');
        menu.classList.toggle('hidden');
    });
