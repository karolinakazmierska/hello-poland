$( document ).ready(function() {


// PLAY NOW BUTTON
// $("#play-now-btn").on("click", function() {
//     $(".discover-welcome").css("display", "none");
//     $(".discover-game").css("display", "block");
// });

// ADDING A MAP
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 52, lng: 20}
    });
    // Hiding styles (defined below)
    map.setOptions({styles: styles['hide']});

    // Listening to clicks & placing marker where clicked
    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });

    function placeMarkerAndPanTo(latLng, map) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    // map.panTo(latLng); // nie chcę przesuwać mapy
    }

}


var styles = {
    hide: [
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
}

initMap();





});
