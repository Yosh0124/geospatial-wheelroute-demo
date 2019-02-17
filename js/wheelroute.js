const color_available_line = "#FF0000";
const color_unavailable_line = "#0000FF";
const color_other_line = "#00FF00";

// Set map view
var map = L.map('map').setView([34.6992,135.4968], 16);

// Set open street map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Draw lines
var lines = Array(i<link.features.length);
for( var i=0; i<link.features.length; i++ ) {

  var start_id = link.features[i].properties.start_id;
  var end_id = link.features[i].properties.end_id;

  var is_underground = false;
  for( var j=0; j<node.features.length; j++ ) {
    if( node.features[j].properties.node_id == start_id || node.features[j].properties.node_id == end_id ){
      if( node.features[j].properties.floor < 0 && node.features[j].properties.in_out == 3) {
        is_underground = true
        break
      }
    }
  }

  if( is_underground ) {



    // switch(link.features[i].properties.link_id) {
      // case "379bfccb-4662-48af-9714-97a4e5ad8c61":
      //   lines[i] = L.polyline([
      //     [link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]],
      //     [link.features[i].geometry.coordinates[1][1],link.features[i].geometry.coordinates[1][0]],
      //   ],{
      //     "color": color_unavailable_line,
      //     "weight": 1
      //   }).addTo(map);
      //   L.marker([link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]]).addTo(map);
      //   break;
      // default:
      //   lines[i] = L.polyline([
      //     [link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]],
      //     [link.features[i].geometry.coordinates[1][1],link.features[i].geometry.coordinates[1][0]],
      //   ],{
      //     "color": color_available_line,
      //     "weight": 1
      //   }).addTo(map);
      //   break;
    // }
  }
}

// Insert markers here.
L.marker([34.700173 ,135.496104]).addTo(map);

// Insert lines here.
L.marker([34.704431 ,135.496943]).addTo(map);

L.Routing.control({
  waypoints: [
    L.latLng(34.700173 ,135.496104),
    L.latLng(34.704431 ,135.496943)
  ],
  router: new L.Routing.OSRMv1({
    profile: "foot"
  })
}).addTo(map);

