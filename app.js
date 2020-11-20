//Toggle Hamburger Menu Function
function OnClickMenu() {
    document.getElementById("top-menu").classList.toggle("change");

    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
};

//Scroll-Effect
const scrollUp = document.querySelector('.scroll-1 a, .scroll a');
scrollUp.addEventListener('click', e => {
    e.preventDefault();
    scrollTo({
        top: 0, behavior: 'smooth'
    });
});

//Popup settings
const popup = document.querySelector('#popup-wrapper');
const close = document.querySelector('.popup-close');

//Event attached to all Burger Meals.(Click on price to place Order)
const prices = document.querySelectorAll('.price').forEach(price => {
    price.addEventListener('click', e => {
        e.preventDefault;
        popup.style.display = 'block';
    });
});

//Close Popup when clicking on the 'X' Top right corner.
close.addEventListener('click', () => {
    popup.style.display = 'none';
});

//Close Popup-wrapper on click
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});

//Event Attachement to Drinks & Desserts Menu Order Buttons.
const ordernowBtn = document.querySelector('.ordernowBtn');
const orderBtn = document.querySelector('.orderBtn');

ordernowBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

orderBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});
