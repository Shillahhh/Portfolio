const openLinks = document.querySelector(".showLinks");
const allLinks = document.querySelector(".nav");
const closeButton = document.querySelector(".hideLinks");



openLinks.addEventListener("click", function() {
    allLinks.classList.toggle("active");
    });

    closeButton.addEventListener("click", function() {
        allLinks.classList.remove("active");
        });
