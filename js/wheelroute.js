const color_available_line = "#81daf5";
const color_unavailable_line = "#909090";
const color_selected_line = "#ff0000";
const color_selected_line_underground = "#00ff00";

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
    case "9b7bbcbc-b1c5-4136-9ac3-e79e9829a371":
    case "5a0ab57c-018d-49fe-ac95-c77761ce6a51":
    case "68df9bdf-cb69-4f11-88a3-84b3ba4e4639":
    case "763061c4-38c2-4467-99a2-cbcde4a6ff56":
    case "0f0c8d59-a26b-4730-94e7-f35cdb5ab214":
    case "5555fcef-7571-4539-98f2-23dd9902dfbe":
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
        "color": color_selected_line_underground,
        "weight": 3,
        "z-index": 400,
      }).addTo(map);
      break;
    case "9fa56fae-d4d0-42f5-a855-f123d82e2b08":
    case "11fa69e6-c69e-44ff-9362-c56f7159064e":
    case "00b8af69-3ecd-4c9d-ac0f-034519795c82":
    case "57e71460-0072-4725-a9bb-a2fa51c2fd40":
      lines[i] = L.polyline([
        [link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]],
        [link.features[i].geometry.coordinates[1][1],link.features[i].geometry.coordinates[1][0]],
      ],{
        "color": color_selected_line,
        "weight": 3,
        "z-index": 400,
      }).addTo(map);
      break;
    case "28eae946-be74-487b-92ab-24274c18d8d5":
    case "5bc81de1-f775-4031-9ecd-dfb695cd23c8":
    case "ebd9f5ee-56fe-41b0-8c1d-2c94c0e5e6e9":
    case "2b07961d-bb5f-4675-ad2a-86533919a4d5":
      lines[i] = L.polyline([
        [link.features[i].geometry.coordinates[0][1],link.features[i].geometry.coordinates[0][0]],
        [link.features[i].geometry.coordinates[1][1],link.features[i].geometry.coordinates[1][0]],
      ],{
        "color": color_unavailable_line,
        "weight": 3,
        "z-index": 400,
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

  lines[i].on('click', function(){
    console.log(this);
  });
}

// Insert markers here.
L.marker([34.700173 ,135.496104]).addTo(map);

// Insert lines here.
L.marker([34.704431 ,135.496943]).addTo(map);