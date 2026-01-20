window.onload = function () {
  document.getElementById("contact-popup").style.display = "none";
  document.getElementById("smallfetch-popup").style.display = "none";
  document.getElementById("p2p-chat-popup").style.display = "none";
};

document
  .getElementById("contact-button")
  .addEventListener("click", function () {
    document.getElementById("contact-popup").style.display = "flex";
  });

document
  .getElementById("close-contact-popup")
  .addEventListener("click", function () {
    document.getElementById("contact-popup").style.display = "none";
  });

window.addEventListener("click", function (event) {
  let popup = document.getElementById("contact-popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

document
  .getElementById("smallfetch-button")
  .addEventListener("click", function () {
    document.getElementById("smallfetch-popup").style.display = "flex";
  });

document
  .getElementById("close-project-popup")
  .addEventListener("click", function () {
    document.getElementById("smallfetch-popup").style.display = "none";
    document.getElementById("p2p-chat-popup").style.display = "none";
  });

window.addEventListener("click", function (event) {
  let popup = document.getElementById("smallfetch-popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});

document.getElementById("smallfetch-gitrepo").onclick = function () {
  location.href = "https://github.com/aem2231/smallfetch";
};
