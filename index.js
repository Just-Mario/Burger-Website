const placeOrder = document.querySelector('.orderNow');
placeOrder.addEventListener('click', () => {
    popup.style.display = 'block';
});

const indexPopup = document.querySelector('#popup-wrapper');
const indexClose = document.querySelector('.popup-close');
//Close Popup when clicking on the 'X' Top right corner.
indexClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

//Close Popup-wrapper on click
indexPopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
