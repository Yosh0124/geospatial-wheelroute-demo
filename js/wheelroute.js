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
    case "9b7bbcbc-b1c5-4136-9ac3-e79e9829a371":
    case "5a0ab57c-018d-49fe-ac95-c77761ce6a51":
    case "68df9bdf-cb69-4f11-88a3-84b3ba4e4639":
    case "763061c4-38c2-4467-99a2-cbcde4a6ff56":
    case "0f0c8d59-a26b-4730-94e7-f35cdb5ab214":
    case "5555fcef-7571-4539-98f2-23dd9902dfbe":


   
      lines[i] = L.polyline([
        [link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]],
        [link.features[i].geometry.coordinates[1][1],link.features[i].geometry.coordinates[1][0]],
      ],{
        "color": color_unavailable_line,
        "weight": 1
      }).addTo(map);
     // L.marker([link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]]).addTo(map);
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

  lines[i]["link_id"] = link.features[i].properties.link_id;

  lines[i].on('click', function(){
    console.log(this);
  });
}

// Insert markers here.
L.marker([34.700173 ,135.496104]).addTo(map);

// Insert lines here.
L.marker([34.704431 ,135.496943]).addTo(map);