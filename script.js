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