


let navbar = document.querySelector('.navbar');
let navbarCollapse = document.querySelector('.navbar-collapse ');


// Function to hide navbar when clicking outside
document.addEventListener('click', function (event) {
    if (!navbar.contains(event.target)) {
        navbarCollapse.classList.remove('show');
    }
});


// Show the button when scrolling down 20px from the top of the page
window.onscroll = function () {
    const goToTopBtn = document.querySelector('.goTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }



    goToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
};



// footer date 
let date = new Date().getFullYear(); // current year has been added to a variable

let dateBox = document.querySelector(".updatedDae"); // created variable for soan ['.dateBox']
dateBox.innerText = date; // current date has been implemanted to that footer span.




