/*menu*/

var toggle_btn = document.querySelector(".main-nav__toggle");
var mobile_menu = document.querySelector(".main-nav__list");
var menu_top = document.querySelector(".main-nav__top");


 if (document.documentElement.clientWidth >= 800) {
    mobile_menu.classList.remove("main-nav__list--open")
  }

  mobile_menu.classList.remove('main-nav__list--nojs');

toggle_btn.addEventListener("click", function(event) {
  event.preventDefault();
      mobile_menu.classList.toggle("main-nav__list--open");
      toggle_btn.classList.toggle("main-nav__toggle--close");
      menu_top.classList.toggle("main-nav__top--closed");
});

/*lightSlider*/
$(document).ready(function() {
      $("#content-slider").lightSlider({
                item:1,
                loop:true,
                keyPress:true
             });
    });

/*map*/
function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {
      lat: 59.938748,
      lng: 30.323079
    }
  });

  var image = 'img/icon-map-marker.svg';
  var marker = new google.maps.Marker({
    position: {
      lat: 59.938748,
      lng: 30.323079
    },

    map: map,
    icon: image
  });

  marker.setMap(map);
}

/*modal form
var modal_open = document.querySelector(".btn--features-order");
var product_buy = document.querySelectorAll(".btn--buy");

var modal = document.querySelector(".modal-cart");
var modal_overlay = document.querySelector(".modal-cart__overlay");


if (modal_open) {
    modal_open.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-cart--show");
  });
};

if (modal_overlay) {
modal_overlay.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-cart--show");
});
};

for (var i = 0; i < product_buy.length; i++) {
    product_buy[i].addEventListener("click", function(event) {
        event.preventDefault();
        if (modal) {
            modal.classList.add("modal-cart--show");
        }
    });
}*/

/*frame*/
var frame = document.querySelector(".feedback__iframe");
var image = document.querySelector(".feedback__img");
if (frame) {
  frame.classList.remove("feedback__iframe--hidden");
  image.classList.add("feedback__img--hidden");
}

/*mark on map*/
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -33, lng: 151}
  });

  var image = '../img/icon-map-marker.svg';
  var beachMarker = new google.maps.Marker({
    position: {lat: -33.890, lng: 151.274},
    map: map,
    icon: image
  });
}
