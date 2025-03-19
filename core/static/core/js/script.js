document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.add("show");
    });

    closeIcon.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});
