$( document ).ready(function() {

// PLAY NOW BUTTON
$("#play-now-btn").on("click", function startGame() {
    $(".discover-welcome").css("display", "none");
    $(".discover-game").css("display", "block");
    initMap();

    // tu na kliknięcie mogę też ustawić timer, po jakimś czasie pokaże się okno game over, twój score, button play again, i po kliknięciu przeładuje się strona

    myTimer = setInterval(function() {
        $("#timer").text(  ( Number($("#timer").text() ) - 1)  )
        if ($("#timer").text() == 0) {
            clearInterval(myTimer);
            $("#game-over").css("display", "flex")
            var finalPts = $("#score").text();
            $("#final-points").text(finalPts);
        }
    }, 1000);
});



// Randomowe miasta
function City(name, lat, lng) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
}
var warsaw = new City("Warsaw", 52.229676, 21.012229);
var lodz = new City("Łódź", 51.759249, 19.455983);
var wroclaw = new City("Wrocław", 51.107885, 17.038538);
var poznan = new City("Poznań", 52.406374, 16.925168);
var gdansk = new City("Gdańsk", 54.352025, 18.646638);
var krakow = new City("Kraków", 50.06465, 19.94498);
var bialystok = new City("Białystok", 53.132489, 23.16884);
var szczecin = new City("Szczecin", 53.428544, 14.552812);

var cities = [warsaw, lodz, wroclaw, poznan, gdansk, krakow, bialystok, szczecin];

// ADDING A MAP
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 52, lng: 19.5}
    });

    // Hiding styles (defined below)
    map.setOptions({styles: styles['hide']});

    // Insert first, random city
    $("#city").text(cities[Math.round(Math.random() * 7)].name);

// ON CLICK
    map.addListener('click', function(e) {
        var currentCity = $("#city").text(); // get the current city
        for (var i=0; i<cities.length; i++) {
            if (cities[i].name == currentCity) {
                var randomCity = cities[i]; // set randomCity depending on #city text
                break;
            }
        };

        // get coordinates of the random city & where clicked
        var lat1 = e.latLng.lat();
        var lat2 = randomCity.lat;
        var lng1 = e.latLng.lng();
        var lng2 = randomCity.lng;

        // draw a polyline connecting the cities
        var coordinates = [
          {lat: lat1, lng: lng1},
          {lat: lat2, lng: lng2},
        ];
        var line = new google.maps.Polyline({
          path: coordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        // calculate the distance between the cities
        var lengthInMeters = google.maps.geometry.spherical.computeLength(line.getPath());
        var lengthInKm = (lengthInMeters / 1000).toFixed(0);
        line.setMap(map);

        // calculate points
        var points = 0;
        if (lengthInKm < 10) { points = 20; }
        else if (lengthInKm >= 10 && lengthInKm < 20) { points = 18; }
        else if (lengthInKm >= 20 && lengthInKm < 30) { points = 16; }
        else if (lengthInKm >= 30 && lengthInKm < 40) { points = 14; }
        else if (lengthInKm >= 40 && lengthInKm < 50) { points = 12; }
        else if (lengthInKm >= 50 && lengthInKm < 60) { points = 10; }
        else if (lengthInKm >= 60 && lengthInKm < 70) { points = 8; }
        else if (lengthInKm >= 70 && lengthInKm < 80) { points = 6; }
        else if (lengthInKm >= 80 && lengthInKm < 90) { points = 4; }
        else if (lengthInKm >= 90 && lengthInKm < 100) { points = 2; }
        else if (lengthInKm >= 100) { points = 0; }

        // show notification & add points into notification
        $("#kilometers").text(lengthInKm);
        $("#points").text(points);

        setTimeout(function(){
            $("#answer").css("display", "flex");
        }, 800);

        // on click
        $("#next-round").on("click", function() {
            // hide #answer box
            $("#answer").css("display", "none");
            // hide polyline
            line.setMap(null)
            // randomly choose next city (poprawić wyżej!!!)
            var randomNumber = Math.round(Math.random() * 7);
            $("#city").text(cities[randomNumber].name);
        })

        // add points into #score (sum from all rounds)
        $("#score").text(Number($("#score").text()) + points);

    });


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

$("#play-again").on("click", function() {
    location.reload(true);
})





});
