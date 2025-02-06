document.getElementById("smallfetch-button").onclick = function () {
  window.location.href = "https://github.com/aem2231/smallfetch"
};

window.onload = function () {
  document.getElementById("contact-popup").style.display = "none";
};

document.getElementById("contact-button").addEventListener("click", function () {
  document.getElementById("contact-popup").style.display = "flex";
});

document.getElementById("close-contact-popup").addEventListener("click", function () {
  document.getElementById("contact-popup").style.display = "none";
});

window.addEventListener("click", function (event) {
  let popup = document.getElementById("contact-popup");
  if (event.target === popup) {
      popup.style.display = "none";
  }
});
