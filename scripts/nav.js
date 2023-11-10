function openMenu() {
    document.getElementById("mobileHeader").style.display = "none";
    document.getElementById("mobileMenu").style.height = "100%";
    document.getElementById("mobileMenu").style.display = "flex";
}

function closeMenu() {
    document.getElementById("mobileMenu").style.display = "none";
    document.getElementById("mobileMenu").style.height = "0";
    document.getElementById("mobileHeader").style.display = "flex";
}