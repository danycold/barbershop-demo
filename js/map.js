var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".popup-close");
var mapOverlay = document.querySelector(".popup-overlay");

mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("map-popup-show");
    mapOverlay.classList.add("popup-overlay-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("map-popup-show");
    mapOverlay.classList.remove("popup-overlay-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("map-popup-show")) {
        mapPopup.classList.remove("map-popup-show");
        mapOverlay.classList.remove("popup-overlay-show");
      }
    }
});

mapOverlay.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("map-popup-show");
    mapOverlay.classList.remove("popup-overlay-show");
});
