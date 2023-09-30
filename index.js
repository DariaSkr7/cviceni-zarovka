console.log('funguju!');

const bullb = document.querySelector('.bulb');
document.addEventListener('keypress', () => {
  bullb.classList.toggle('bulb--on');
});
