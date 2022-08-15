// All h2 color lightblue 
const colorLightBlue = document.getElementsByTagName('h2');
for (color of colorLightBlue) {
    color.style.color = 'lightblue';
}

// Backpack section background color tomato

const bgTomato = document.getElementById('backpack');
bgTomato.style.backgroundColor = 'tomato';

// all card class border-radius 30px
const cardLists = document.getElementsByClassName('card');
for (cardList of cardLists) {
    cardList.style.borderRadius = '30px'
    console.log(cardLists);
}
