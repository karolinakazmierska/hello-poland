$( document ).ready(function() {

// PLAY NOW BUTTON
$("#play-now-btn").on("click", function startGame() {
    $(".discover-welcome").css("display", "none");
    $(".discover-game").css("display", "block");
    initMap();

    var myTimer = setInterval(function() {
        $("#timer").text(  ( Number($("#timer").text() ) - 1)  )
        if ($("#timer").text() == 0) {
            clearInterval(myTimer);
            $("#game-over").css("display", "flex")
            var finalPts = $("#score").text();
            $("#final-points").text(finalPts);
        }
    }, 1000);
});




// ADDING A MAP
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 52, lng: 19.5}
    });

    // Hiding styles (defined below)
    map.setOptions({styles: styles['hide']});

    // Insert first, random city
    $("#city").text(cities[Math.round(Math.random() * (cities.length-1))].name);

// ON CLICK
    map.addListener("click", function(e) {
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
        }, 300);

        // on click
        $("#next-round").on("click", function() {
            // hide #answer box
            $("#answer").css("display", "none");
            // hide polyline
            line.setMap(null)
            // randomly choose next city (poprawić wyżej!!!)
            var randomNumber = Math.round(Math.random() * (cities.length-1));
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
var bydgoszcz = new City("Bydgoszcz", 53.12348, 18.008438);
var torun = new City("Toruń", 53.01379, 18.598444);
var zakopane = new City("Zakopane", 49.299181, 19.949562);
var katowice = new City("Katowice", 50.264892, 19.023782);
var kielce = new City("Kielce", 50.866077, 20.628568);
var czestochowa = new City("Częstochowa", 50.81182, 19.120309);
var bielskobiala = new City("Bielsko-Biała", 49.822377, 19.058384);
var lublin = new City("Lublin", 51.246454, 22.568446);
var zielonagora = new City("Zielona Góra", 51.935621, 15.506186);
var legnica = new City("Legnica", 51.207007, 16.155323);
var opole = new City("Opole", 50.675107, 17.921298);
var radom = new City("Radom", 51.402724, 21.147133);
var lomza = new City("Łomża", 53.17812, 22.059032);
var rzeszow = new City("Rzeszów", 50.041187, 21.99912);
var olsztyn = new City("Olsztyn", 53.778422, 20.480119);
var malbork = new City("Malbork", 54.036132, 19.037976);
var slupsk = new City("Słupsk", 54.464148, 17.028482);
var zamosc = new City("Zamość", 50.723088, 23.251968);
var kalisz = new City("Kalisz", 51.76728, 18.085346);
var nowysacz = new City("Nowy Sącz", 49.617454, 20.715332);
var mikolajki = new City("Mikołajki", 53.802702, 21.570604);
var jeleniagora = new City("Jelenia Góra", 50.904417, 15.719326);
var plock = new City("Płock", 52.546345, 19.706536);
var wloclawek = new City("Włocławek", 52.64833, 19.067736);
var swiebodzin = new City("Świebodzin", 52.247296, 15.533572);
var kolobrzeg = new City("Kołobrzeg", 54.175917, 15.583267);
var gniezno = new City("Gniezno", 52.534925, 17.582657);
var suwalki = new City("Suwałki", 54.111522, 22.930788);
var kutno = new City("Kutno", 52.230618, 19.364278);


var cities = [warsaw, lodz, wroclaw, poznan, gdansk, krakow, bialystok, szczecin, bydgoszcz, torun, zakopane, katowice, kielce, czestochowa, bielskobiala, lublin, zielonagora, legnica, opole, radom, lomza, rzeszow, olsztyn, malbork, slupsk, zamosc, kalisz, nowysacz, mikolajki, jeleniagora, plock, wloclawek, swiebodzin, kolobrzeg, gniezno, suwalki, kutno];





});
