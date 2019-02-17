const color_available_line = "#FF0000";
const color_unavailable_line = "#0000FF";

// Set map view
var map = L.map('map').setView([34.6992,135.4968], 16);

// Set open street map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Draw lines
var lines = Array(i<link.features.length);
for( var i=0; i<link.features.length; i++ ) {
  switch(link.features[i].properties.link_id) {
    case "379bfccb-4662-48af-9714-97a4e5ad8c61":
      lines[i] = L.polyline([
        [link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]],
        [link.features[i].geometry.coordinates[1][1],link.features[i].geometry.coordinates[1][0]],
      ],{
        "color": color_unavailable_line,
        "weight": 1
      }).addTo(map);
      L.marker([link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]]).addTo(map);
      break;
    default:
      lines[i] = L.polyline([
        [link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]],
        [link.features[i].geometry.coordinates[1][1],link.features[i].geometry.coordinates[1][0]],
      ],{
        "color": color_available_line,
        "weight": 1
      }).addTo(map);
      break;
  }
  lines[i].on('click', function(){
    alert("link_id=" + link.features[i].properties.link_id);
  });
}

// Insert markers here.


// Insert lines here.