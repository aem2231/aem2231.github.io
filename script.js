fetch('./assets/doomguy.txt')
  .then(response => response.text())
  .then(text => {
    const doomguyElement = document.querySelector('.doomguy');
    if (doomguyElement) {
      doomguyElement.textContent = text;
    } else {
      console.error('Element with class "doomguy" not found');
    }
  })
  .catch(error => console.error('Error loading the file:', error));

fetch('./assets/cacodemon.txt')
  .then(response => response.text())
  .then(text => {
    const doomguyElement = document.querySelector('.cacodemon');
    if (doomguyElement) {
      doomguyElement.textContent = text;
    } else {
      console.error('Element with class "doomguy" not found');
    }
  })
  .catch(error => console.error('Error loading the file:', error));

fetch('./assets/slayer_mark.txt')
  .then(response => response.text())
  .then(text => {
    const doomguyElement = document.querySelector('.slayer-mark');
    if (doomguyElement) {
      doomguyElement.textContent = text;
    } else {
      console.error('Element with class "doomguy" not found');
    }
  })
  .catch(error => console.error('Error loading the file:', error));
  
const aboutMeCard = document.querySelector('.aboutme-card');
const skillsCard = document.querySelector('.skills-card');
const siteHeader = document.querySelector('.site-header');
const projectsCard = document.querySelector('.projects-card');
const body = document.querySelector('body');
const allOtherElements = document.querySelectorAll('main, .site-header, .cards-container');

function aboutmeApplyBackgroundBlur() {
  aboutMeCard.style.filter = 'brightness(120%)';
  skillsCard.style.filter = 'blur(10px) brightness(80%)';
  projectsCard.style.filter = 'blur(10px) brightness(80%)';
  siteHeader.style.filter = 'blur(10px) brightness(80%)';
}

function skillsApplyBackgroundBlur() {
  skillsCard.style.filter = 'brightness(120%)';
  aboutMeCard.style.filter = 'blur(10px) brightness(80%)';
  projectsCard.style.filter = 'blur(10px) brightness(80%)';
  siteHeader.style.filter = 'blur(10px) brightness(80%)';
}

function projectsApplyBackgroundBlur() {
  projectsCard.style.filter = 'brightness(120%)';
  skillsCard.style.filter = 'blur(10px) brightness(80%)';
  aboutMeCard.style.filter = 'blur(10px) brightness(80%)';
  siteHeader.style.filter = 'blur(10px) brightness(80%)';
}

function removeBackgroundBlur() {
  aboutMeCard.style.filter = 'none';
  siteHeader.style.filter = 'none';
  skillsCard.style.filter = 'none';
  projectsCard.style.filter = 'none';
  allOtherElements.forEach(element => {
    element.style.filter = 'none';
  });
}

aboutMeCard.addEventListener('mouseenter', aboutmeApplyBackgroundBlur);
aboutMeCard.addEventListener('mouseleave', removeBackgroundBlur);

skillsCard.addEventListener('mouseenter', skillsApplyBackgroundBlur);
skillsCard.addEventListener('mouseleave', removeBackgroundBlur);

projectsCard.addEventListener('mouseenter', projectsApplyBackgroundBlur);
projectsCard.addEventListener('mouseleave', removeBackgroundBlur);
