console.log("yo ho ho");
var lat, long, map, userRef, userId;


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

    //show weather

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&APPID=8ba24065d724869e93ccd260b06096e5";
    
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





































// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const config = {
    apiKey: "AIzaSyCnIalpFtrV0ca3m1UmTL5mo3MB3SK1F4k",
    authDomain: "nps-website.firebaseapp.com",
    databaseURL: "https://nps-website.firebaseio.com",
    projectId: "nps-website",
    storageBucket: "nps-website.appspot.com",
    messagingSenderId: "950698846561"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  // add login event
  btnLogin.addEventListener('click', function(e) {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(function(e){ 
      console.log(e.message)
    });
  });

  // add signup event
  btnSignUp.addEventListener('click', function(e) {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(function (e) {
      console.log(e.message); 
      alert("password needs to be 6 characters long and email with domain needs to be used")
    });
  });

  // add a realtime listener
  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if(firebaseUser) {
      userId = firebaseUser.uid
      console.log(userId)
      userRef = database.ref("/users/" + userId);
      console.log(userRef)
      waiter()
      console.log(firebaseUser);
    }
    else {
      console.log('not logged in');
    }
  });


//this will be the command that we will use to create favorite park subObj push our favorite parks on button click
//userRef.child("favParks").push("please")


//we were having control flow issues with the user ref being undefined thats why we made this function

function waiter () {
  userRef.child("favParks").on("value", function(snap){
    console.log("chiilde was added")
    //this is looping over all our favParks and we do stuff yet to be decided
      snap.forEach(function(childSnapshot) {
          console.log(childSnapshot.val())
    })
  })
}


    
