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

$("button").on("click", function() {
    // Prevent form from submitting
    event.preventDefault();

    //show weather
    var latitude = lat;
    var longitude = long;
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&APPID=8ba24065d724869e93ccd260b06096e5";
    
    // Create an AJAX call to retrieve data Log the data in console
    $.ajax({url: queryURL, method: "GET"})
     .done(function(response) {
     console.log(response);
     var date = moment().add(1,"d").format("YYYY-MM-DD"); 
     console.log(date);

     var date2 = moment().add(2,"d").format("YYYY-MM-DD"); 
     console.log(date2);

     var date3 = moment().add(3,"d").format("YYYY-MM-DD"); 
     console.log(date3);
     //current temperature
     var currentTemp = ((response.list[0].main.temp - 273.15) * 1.8 + 32).toFixed(2);
     console.log(currentTemp);

     //assume lowest temp is the min. temp. at midnight
     //assume highest temp is the max. temp. at noon
     var lowTemp = ((response.list[2].main.temp_min - 273.15) * 1.8 + 32).toFixed(2);
     console.log(lowTemp);
     var highTemp = ((response.list[6].main.temp_max - 273.15) * 1.8 + 32).toFixed(2);
     console.log(highTemp);
     //humidity
     var humidity = response.list[2].main.humidity;
     console.log(humidity);
     //weather
     var weather = response.list[2].weather[0].main;
     console.log(weather);

     var lowTemp2 = ((response.list[11].main.temp_min - 273.15) * 1.8 + 32).toFixed(2);
     console.log(lowTemp2);
     var highTemp2 = ((response.list[15].main.temp_max - 273.15) * 1.8 + 32).toFixed(2);
     console.log(highTemp2);
     //humidity
     var humidity2 = response.list[11].main.humidity;
     console.log(humidity2);
     //weather
     var weather2 = response.list[11].weather[0].main;
     console.log(weather2);

     var lowTemp3 = ((response.list[20].main.temp_min - 273.15) * 1.8 + 32).toFixed(2);
     console.log(lowTemp3);
     var highTemp3 = ((response.list[24].main.temp_max - 273.15) * 1.8 + 32).toFixed(2);
     console.log(highTemp3);
     //humidity
     var humidity3 = response.list[20].main.humidity;
     console.log(humidity3);
     //weather
     var weather3 = response.list[20].weather[0].main;
     console.log(weather3);
    //  $("").text(response.name);
    //  $(".wind").text(response.wind.speed + " km/h");
    //  $(".humidity").text(response.main.humidity);
    //  $(".temp").text(response.main.temp - 273.15) * 1.8 + 32;
    $("#currentTemp").append(currentTemp+"℉");

    //in order to see different data, need to update longitude and latitude data from the google map API
    //now it stays the same, due to the fixed value for those two variables
    $(".table > tbody").append("<tr><td id='dayCount'>" + date + "</td><td id='lowTemp'>" + lowTemp +"℉"+ "</td><td id='highTemp'>" +
    highTemp +"℉"+ "</td><td id='humidity'>" + humidity + "</td><td id='weather'>" + weather + "</td></tr>" + "<tr><td id='dayCount2'>" + date2 + "</td><td id='lowTemp2'>" + lowTemp2 +"℉"+ "</td><td id='highTemp2'>" +
    highTemp2 +"℉"+ "</td><td id='humidity2'>" + humidity2 + "</td><td id='weather2'>" + weather2 + "</td></tr>"+"<tr><td id='dayCount3'>" + date3 + "</td><td id='lowTemp3'>" + lowTemp3 +"℉"+ "</td><td id='highTemp3'>" +
    highTemp3 +"℉"+ "</td><td id='humidity3'>" + humidity3 + "</td><td id='weather3'>" + weather3 + "</td></tr>");
    });
  
    //show park info
    var park = $("#nationalPark").val().toLowerCase();
    //"yell" = "yellowstone"
    if(park == "yellowstone"){
      $("#nationalParkName").text("Yellowstone");
      parkCode = "yell";
    }
    //"yose" = "yosemite national park"
    else if(park == "yosemite"){
      $("#nationalParkName").text("Yosemite");
      parkCode = "yose";
    }
    //"grca" = "grand canyon national park"
    else if(park == "grand canyon"){
      $("#nationalParkName").text("Grand Canyon");
      parkCode = "grca";
    }
    //"zion" = "zion national park"
    else if(park == "zion"){
      $("#nationalParkName").text("Zion");
      parkCode = "zion";
    }
    //"acad" = "acadia national park"
    else if(park == "acadia"){
      $("#nationalParkName").text("Acadia");
      parkCode = "acad";
    }
    //"grte" = "grand teton national park"
    else if(park == "grand teton"){
      $("#nationalParkName").text("Grand Teton");
      parkCode = "grte";
    }
    //"glac" = "glacier national park"
    else if(park == "glacier"){
      $("#nationalParkName").text("Glacier");
      parkCode = "glac";
    }
    //"grsm" = "great smoky mountains national park"
    else if(park == "great smoky"){
      $("#nationalParkName").text("Great Smoky");
      parkCode = "grsm";
    }
    //"romo" = "rocky mountain national park"
    else if(park == "rocky mountain"){
      $("#nationalParkName").text("Rocky Mountain");
      parkCode = "romo";
    }
    //"olym" = "olympic national park"
    else if(park == "olympic"){
      $("#nationalParkName").text("Olympic");
      parkCode = "olym";
    }
    else{
      alert("Not found in our database. Please try another national park.");
    }

    // console.log(park);

    var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" +
      parkCode + "&api_key=UWw1lG6XxvjBIgZpCUchXWJTbKHTFkWzqYEFJ5xE";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
        $("#infoHere").html(response.data[0].directionsUrl);
        console.log(response);
        console.log(response.data[0].name);
      });

    function reset(){
      $("#nationalPark").val("");
      $("#currentTemp").empty();
      $(".table > tbody").empty();
      $("#infoHere").empty();
    }

    reset();
      
    });


