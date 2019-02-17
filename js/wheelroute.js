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
    switch(link.features[i].properties.link_id) {
      case "e95d91d2-5dd4-41c4-8b61-3ed53d8c5c63":
      case "cdaf9622-9022-4f14-828b-701aabf7d7c5":
      case "174e6d1d-2d5f-488b-aecb-d374b94e6d2a":
      case "0d920bf3-5f73-461c-88b8-771c0c71b5ba":
      case "223a54b0-4e8c-4218-97fb-2956143c422b":
      case "9fd77112-eafe-44d2-99e5-49705f328dfa":
      case "c848e984-642c-49c6-836c-34bfc29c2cf3":
      case "f55d4264-872b-4571-a008-706ee01407d8":
      case "74e18ac9-8910-4d08-adac-913a0b20c43e":
      case "dc8a6d7e-2066-410a-a6b9-11fa43e85ae3":
      case "a86f6f90-9398-45a1-a23b-c4e3d824a9ae":
      case "763061c4-38c2-4467-99a2-cbcde4a6ff56":
      case "6e944736-122f-4827-bf64-0132c9fa2b57":
      case "0f0c8d59-a26b-4730-94e7-f35cdb5ab214":
        lines[i] = L.polyline([
          [link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]],
          [link.features[i].geometry.coordinates[1][1],link.features[i].geometry.coordinates[1][0]],
        ],{
          "color": color_unavailable_line,
          "weight": 1
        }).addTo(map);
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

    lines[i]["link_id"] = link.features[i].properties.link_id

    lines[i].on("click", function(){
      console.log(this);
    });
  }
}

// Insert markers here.
L.marker([34.700173 ,135.496104]).addTo(map);

// Insert lines here.
L.marker([34.704431 ,135.496943]).addTo(map);

// Auto routing.
// L.Routing.control({
//   waypoints: [
//     L.latLng(34.700173 ,135.496104),
//     L.latLng(34.704431 ,135.496943)
//   ],
//   router: new L.Routing.OSRMv1({
//     profile: "foot"
//   })
// }).addTo(map);

