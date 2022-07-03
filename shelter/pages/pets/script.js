

// Hamburger menu //

const hamburger = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__navigation');
const outside = document.querySelector('.container--hidden');
const navLinks = document.querySelectorAll('.header__nav-el');

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}

hamburger.addEventListener('click', () => {
  navigation.classList.toggle("active")
  disableScrolling()
  navigation.classList.contains("active") ? disableScrolling() : enableScrolling()
  });

outside.addEventListener('click', () => {
  navigation.classList.remove("active")
  enableScrolling()
});

navLinks.forEach((navLink) => navLink.addEventListener('click', () => {
 navigation.classList.remove("active")
 enableScrolling()}
));



//Popup//
const popup = document.querySelector('.popup');
const popupPage = document.querySelector('.popup__page');
const content = document.querySelector('.popup-wrapper');
const slider = document.querySelector('.pets__wrapper');
const popupButton = document.querySelector('.popup__button');

function openModal (event) {
  const card = event.target.closest('.pets__wrapper--item')
  if (card) {
    const data = pets[card.dataset.id];
    content.innerHTML = `
    <img class="popup-wrapper__image"
            src="${data.img_small}" alt="${data.name}"></img>
            <div class="popup__content">
              <h3>${data.name}</h3>
              <h4>${data.type} - ${data.breed}</h4>
              <div class="popup__text">
              ${data.description}
              </div>
              <ul>
                <li><span class="spans">Age: </span>${data.age}</li>
                <li><span>Inoculations: </span>${data.inoculations}</li>
                <li><span>Diseases: </span>${data.diseases}</li>
                <li><span>Parasites: </span>${data.parasites}</li>
              </ul>
            </div>
    `;
    popup.classList.add('open');
    disableScrolling()
  }
}
slider.addEventListener('click',openModal);

function closeModal(event){
  let classes = event.target.classList;
  if(classes.contains('popup__body') || classes.contains('popup__button') || classes.contains('popup-close__button')) {
    popup.classList.remove('open');
    enableScrolling()
}
}
popupButton.addEventListener('click', closeModal);
popup.addEventListener('click', closeModal);




popupPage.addEventListener('mouseenter', () => {popupButton.classList.remove('hover')});
popupPage.addEventListener('mouseleave', () => {popupButton.classList.add('hover')});



