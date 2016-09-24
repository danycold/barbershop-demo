var link = document.querySelector(".login");
var popup = document.querySelector(".login-popup");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".popup-overlay");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("login-popup-show");
    overlay.classList.add("popup-overlay-show");
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("login-popup-show");
    overlay.classList.remove("popup-overlay-show");
    popup.classList.remove("login-popup-error");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.remove("login-popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("login-popup-error");
    } else {
      localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("login-popup-show")) {
        popup.classList.remove("login-popup-show");
        overlay.classList.remove("popup-overlay-show");
        popup.classList.remove("login-popup-error");
      }
    }
});

overlay.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("login-popup-show");
    overlay.classList.remove("popup-overlay-show");
    popup.classList.remove("login-popup-error");
});
