// Slideshow Logic
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}
showSlides();

// Language Toggle Logic
function changeLanguage(lang) {
    const menuTitle = document.getElementById('menu-title');
    const btnDirections = document.getElementById('btn-directions');
    const btnCall = document.getElementById('btn-call');
    const menuItems = document.querySelectorAll('.item-name');

    if (lang === 'en') {
        menuTitle.innerText = "Our Menu";
        btnDirections.innerText = "Directions";
        btnCall.innerText = "Call";
        menuItems.forEach(item => item.innerText = item.getAttribute('data-en'));
    } else {
        menuTitle.innerText = "Το Μενού μας";
        btnDirections.innerText = "Οδηγίες";
        btnCall.innerText = "Κλήση";
        menuItems.forEach(item => item.innerText = item.getAttribute('data-el'));
    }
}
