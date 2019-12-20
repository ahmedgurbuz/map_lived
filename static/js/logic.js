// Create a map object
var myMap = L.map("map", {
  center: [41.385063, 2.173404],
  zoom: 3
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [41.450508, 31.789339],
  name: "Zonguldak, Turkey",
  year: "1999-2002"
},
{
  location: [40.978931, 27.515240],
  name: "Tekirdag, Turkey",
  year: "1991-1998"
},
{
  location: [41.008240, 28.978359],
  name: "Istanbul, Turkey",
  year: "2002-2004"
},
{
  location: [39.933365, 32.859741],
  name: "Ankara, Turkey",
  year: "2009-2014"
},
{
  location: [33.312805, 44.361488],
  name: "Baghdad, Iraq",
  year: "2014-2015"
},
{
  location: [23.810331, 90.412521],
  name: "Dhaka, Bangladesh",
  year: "2015-2016"
},
{
  location: [35.779591, -78.638176],
  name: "Raleigh, NC",
  year: "2007-2009"
},
{
  location: [33.214840, -97.133064],
  name: "Denton, TX",
  year: "2006-2007"
},
{
  location: [32.776665, -96.796989],
  name: "Dallas, TX",
  year: "2016-2019"
},
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>" + city.year + "</h3>")
    .addTo(myMap);
}
