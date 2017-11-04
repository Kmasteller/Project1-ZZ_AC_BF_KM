console.log("yo ho ho");
var lat, long, map;


$("#submit").on("click", function (event) {
  event.preventDefault();
  console.log("hey you clicked me")
  var parkEntered = $("#nationalPark").val().trim();
  console.log(parkEntered);
  var queryUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + parkEntered + "&key=AIzaSyDygNCUy0c-ktsxgQh54x83Rdza88YjOYg"
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).done(function(response){
    console.log(response)
    lat = response.results[0].geometry.location.lat;
    long = response.results[0].geometry.location.lng;
    var coordinates = {lat: lat, lng: long}
    console.log(lat, long)
     map = new google.maps.Map(document.getElementById('mapHere'), {
          center: coordinates,
          mapTypeId: 'satellite',
          zoom: 10
        });
      var infowindow = new google.maps.InfoWindow({});

          var marker, i;

        marker = new google.maps.Marker({
          position: coordinates,
          map: map
        });

        google.maps.event.addListener(marker, 'click', function () {
          
            infowindow.setContent(response.results[0].address_components[0].short_name);
            infowindow.open(map, marker);
          
        });
     // var marker = new google.maps.Marker({
     //   position: coordinates,
     //   map: map,
     //   title: "heelow"
     // })
  })
  // body...
})