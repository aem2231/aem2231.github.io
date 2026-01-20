window.onload = function () {
  // Ensure popups are hidden initially
  const contactPopup = document.getElementById("contact-popup");
  const smallfetchPopup = document.getElementById("smallfetch-popup");
  const p2pPopup = document.getElementById("p2p-chat-popup");

  if (contactPopup) contactPopup.style.display = "none";
  if (smallfetchPopup) smallfetchPopup.style.display = "none";
  if (p2pPopup) p2pPopup.style.display = "none";
};

// Contact popup open/close
const contactBtn = document.getElementById("contact-button");
const contactClose = document.getElementById("close-contact-popup");
const contactPopupEl = document.getElementById("contact-popup");

if (contactBtn && contactPopupEl) {
  contactBtn.addEventListener("click", function () {
    contactPopupEl.style.display = "flex";
  });
}

if (contactClose && contactPopupEl) {
  contactClose.addEventListener("click", function () {
    contactPopupEl.style.display = "none";
  });
}

// Clicking backdrop to close contact popup
window.addEventListener("click", function (event) {
  const popup = document.getElementById("contact-popup");
  if (popup && event.target === popup) {
    popup.style.display = "none";
  }
});

// Smallfetch popup open
const smallfetchBtn = document.getElementById("smallfetch-button");
const smallfetchPopupEl = document.getElementById("smallfetch-popup");

if (smallfetchBtn && smallfetchPopupEl) {
  smallfetchBtn.addEventListener("click", function () {
    smallfetchPopupEl.style.display = "flex";
  });
}

// p2p-chat popup open
const p2pBtn = document.getElementById("p2p-chat-button");
const p2pPopupEl = document.getElementById("p2p-chat-popup");

if (p2pBtn && p2pPopupEl) {
  p2pBtn.addEventListener("click", function () {
    p2pPopupEl.style.display = "flex";
  });
}

// Close project popups
const closeProjectEls = document.querySelectorAll(".close-project-popup");
if (closeProjectEls && closeProjectEls.length) {
  closeProjectEls.forEach(function (el) {
    el.addEventListener("click", function () {
      const sf = document.getElementById("smallfetch-popup");
      const p2 = document.getElementById("p2p-chat-popup");
      if (sf) sf.style.display = "none";
      if (p2) p2.style.display = "none";
    });
  });
}

// Backdrop clicks for project popups
window.addEventListener("click", function (event) {
  const sf = document.getElementById("smallfetch-popup");
  const p2 = document.getElementById("p2p-chat-popup");
  if (sf && event.target === sf) {
    sf.style.display = "none";
  }
  if (p2 && event.target === p2) {
    p2.style.display = "none";
  }
});

// Repo link wiring
const smallfetchRepo = document.getElementById("smallfetch-gitrepo");
if (smallfetchRepo) {
  smallfetchRepo.onclick = function () {
    location.href = "https://github.com/aem2231/smallfetch";
  };
}

const p2pRepo = document.getElementById("p2p-chat-gitrepo");
if (p2pRepo) {
  p2pRepo.onclick = function () {
    location.href = "https://github.com/aem2231/p2p_chat_app";
  };
}
