const navItems = document.querySelector('#nav_items');
const openNavBtn = document.querySelector('#open_nav_btn');
const closeNavBtn = document.querySelector('#close_nav_btn');

// Function to open the navigation menu
const openNav = () => {
    if (window.innerWidth <= 1024) { // Check if the screen width is 1024px or less
        navItems.style.display = 'flex'; // Show the nav items
        openNavBtn.style.display = 'none'; // Hide the open button
        closeNavBtn.style.display = 'inline-block'; // Show the close button
    }
};

// Function to close the navigation menu
const closeNav = () => {
    if (window.innerWidth <= 1024) { // Check if the screen width is 1024px or less
        navItems.style.display = 'none'; // Hide the nav items
        openNavBtn.style.display = 'inline-block'; // Show the open button
        closeNavBtn.style.display = 'none'; // Hide the close button
    }
};


// Event listeners for opening and closing the menu
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

// Ensure the menu is closed and buttons are correctly displayed on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        navItems.style.display = 'flex'; // Always show nav items on larger screens
        openNavBtn.style.display = 'none'; // Hide the open button
        closeNavBtn.style.display = 'none'; // Hide the close button
    } else {
        navItems.style.display = 'none'; // Hide the nav items on small screens by default
        openNavBtn.style.display = 'inline-block'; // Show the open button on small screens
        closeNavBtn.style.display = 'none'; // Hide the close button on small screens
    }
});
document.getElementById('chatbot-btn').addEventListener('click', function() {
    // Code to open chatbot
    alert('Chatbot feature coming soon!');
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
  
    const leftItems = document.querySelectorAll(".testimonial-column-left .testimonial-item");
    const rightItems = document.querySelectorAll(".testimonial-column-right .testimonial-item");
  
    const totalLeftItems = leftItems.length;
    const totalRightItems = rightItems.length;
  
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
  
    // Function to show the current slide pair
    function showSlide(index) {
      // Handle left column sliding (Person 1, Person 2, ...)
      leftItems.forEach((item, idx) => {
        let leftIndex = (idx - index + totalLeftItems) % totalLeftItems;
        item.style.transform = `translateX(${(leftIndex - currentIndex) * 100}%)`;
      });
  
      // Handle right column sliding (Person 3, Person 4, ...)
      rightItems.forEach((item, idx) => {
        let rightIndex = (idx - index + totalRightItems) % totalRightItems;
        item.style.transform = `translateX(${(rightIndex - currentIndex) * 100}%)`;
      });
    }
  
    // Show the next pair of slides
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % Math.max(totalLeftItems, totalRightItems);
      showSlide(currentIndex);
    }
  
    // Show the previous pair of slides
    function showPrevSlide() {
      currentIndex = (currentIndex - 1 + Math.max(totalLeftItems, totalRightItems)) % Math.max(totalLeftItems, totalRightItems);
      showSlide(currentIndex);
    }
  
    // Manual navigation
    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);
  
    // Initialize the first slide
    showSlide(currentIndex);
  });
  // JavaScript to handle the pop-up form

// Show the pop-up form when the "Submit Here" button is clicked
document.getElementById('register-btn').addEventListener('click', function() {
  document.getElementById('popup-form').style.display = 'block';
});

// Hide the pop-up form when the close button is clicked
document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('popup-form').style.display = 'none';
});

// Hide the pop-up form if the user clicks outside of the form container
window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('popup-form')) {
      document.getElementById('popup-form').style.display = 'none';
  }
});

// JavaScript to handle the pop-up form
document.getElementById('find-doctor-btn').addEventListener('click', function() {
  document.getElementById('popup-form').style.display = 'block';
});

document.getElementById('take-appointment-btn').addEventListener('click', function() {
  document.getElementById('popup-form').style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('popup-form').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('popup-form')) {
      document.getElementById('popup-form').style.display = 'none';
  }
});
// JavaScript to handle the pop-up form
document.getElementById('sign-up-btn').addEventListener('click', function() {
  document.getElementById('popup-form').style.display = 'block';
});


document.getElementById('book-now-btn').addEventListener('click', function() {
  document.getElementById('popup-form').style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('popup-form').style.display = 'none';
});

document.querySelector('.login').addEventListener('click', function() {
  openForm('loginForm');
});
document.querySelector('.sign-in').addEventListener('click', function() {
  openForm('signInForm');
});

function openForm(formId) {
  document.getElementById(formId).style.display = "block";
}

function closeForm(formId) {
  document.getElementById(formId).style.display = "none";
}
document.getElementById('play-video-btn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('video-popup').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('video-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('video-popup')) {
      document.getElementById('video-popup').style.display = 'none';
  }
});
