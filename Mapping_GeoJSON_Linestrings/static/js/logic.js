console.log("working");

//  Get data from cities.js
let cityData = cities;



let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
    // Then we add our 'graymap' tile layer to the map.
   // streets.addTo(map);

    // We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
  });

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

let map = L.map('mapid', {
	center: [44, -80],
	zoom: 2,
	layers: [streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
    let airportData = "https://raw.githubusercontent.com/D-u-s-t-i-n/Module13_Mapping_Earthquakes/master/majorAirports.json";
    let torontoData = "https://raw.githubusercontent.com/D-u-s-t-i-n/Module13_Mapping_Earthquakes/master/torontoRoutes.json";
    // Accessing the Toronto neighborhoods GeoJSON URL.
  let torontoHoods = "https://raw.githubusercontent.com/D-u-s-t-i-n/Module13_Mapping_Earthquakes/master/torontoNeighborhoods.json";

    // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });
// Grabbing our GeoJSON data.
// Create a style for the lines.
let myStyle = {
	color: "#ffffa1",
	weight: 2
}

d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h3> Desgination:" + feature.properties.dst + "</h3>");
}
}).addTo(map);
});

// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });