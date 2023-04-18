/* Show and Hide Map */
const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    let removeClass = document.getElementsByClassName('display-map')
    if(removeClass[0])
      removeClass[0].classList.remove('display-map')

    let mapGoogle = document.getElementById(radio.value)    
    if (radio.checked) 
      mapGoogle.classList.add('display-map');
  });
});



/* Pop-Up */
const openPopupBtn = document.getElementById('page1');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('page2');

openPopupBtn.addEventListener('click', () => {
  popup.classList.add('show');
  popup.classList.remove('hidden');
});

closePopupBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
  popup.classList.remove('show');
});

popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.classList.add('hidden');
    popup.classList.remove('show');
  }
});
