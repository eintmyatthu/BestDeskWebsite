// Menu Icon
document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        navbar.classList.toggle('active');  
    }
    

    window.onscroll = () => {
        navbar.classList.remove('active');
    }
});


// JavaScript to handle search functionality
document.addEventListener("DOMContentLoaded", function() {
    let searchInput = document.getElementById("searchInput");
    let searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function() {
        let searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== "") {
            // Implement search functionality here, e.g., filter items based on searchTerm
            console.log("Search term:", searchTerm);
            // Clear the search input
            searchInput.value = "";
        } else {
            alert("Please enter a search term.");
        }
    });
});

  
  