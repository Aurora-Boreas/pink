// Map

ymaps.ready(initMap);

function initMap() {
  map = new ymaps.Map("contacts-map", {
    center: [59.938658, 30.322836],
    zoom: 16,
    controls: []
  });

  map.behaviors.disable(['scrollZoom']);

  mapMarker = new ymaps.Placemark([59.938658, 30.322836], {
    hintContent: "г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8, офис 101"
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-marker.svg',
    iconImageSize: [36, 36],
    iconImageOffset: [-10, -36]
  });

  map.geoObjects.add(mapMarker);
}
