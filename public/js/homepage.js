function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', bypopularity, true); // replaces postman

    request.onload = function () {
        restaurant_array = JSON.parse(request.responseText);

        fetchReviews();
        displayRestaurants();
        displayCarousel();
        getusername();
    };

    //This command starts the calling of the restaurants web api
    request.send();
}

function displayCarousel() {
    totalrestaurants = restaurant_array.length;
    count = 0;
    for (var count = 0; count < totalrestaurants; count++) {
        var thumb = restaurant_array[count].restaurant_picture;
        var id = restaurant_array[count].restaurant_id;
        var tit = restaurant_array[count].restaurant_name;

        if (restaurant_array[count].restaurant_id == 3) {
            document.getElementById("image1").src = thumb;
            document.getElementById("title1").textContent = tit;
        }
        if (restaurant_array[count].restaurant_id == 4) {
            document.getElementById("image2").src = thumb;
            document.getElementById("title2").textContent = tit;
        }
        if (restaurant_array[count].restaurant_id == 5) {
            document.getElementById("image3").src = thumb;
            document.getElementById("title3").textContent = tit;
        }
    }
    //message = restaurantCount + " restaurants " + category;      
    document.getElementById("parent").textContent = "";
}

//This function is to display the restaurants tiles
//that filters based on "Now Showing" or "Coming Soon“
function displayRestaurants() {
    var table = document.getElementById("restaurantsTable");

    table.innerHTML = "";
    totalrestaurants = restaurant_array.length;
    for (var count = 0; count < 6; count++) {
        var thumbnail = restaurant_array[count].restaurant_picture;
        var title = restaurant_array[count].restaurant_name;
        var AverageRating = restaurant_array[count].overallrating;
        var cell = '<div class="col-md-4" style="float: none; margin: 0 auto;">' +
            '<div class="cardy" style="float: none; margin: auto; width: 70%;">' +
            '<div>' +
            '<div class="mystyle">' +
            '<br><span class="card-title" style="font-size: 125%; font-family: "Nirmala UI";">' + title + '</span><br>' +
            '</div>' +
            '</div>' +
            '<div>' +
            '<div>' +
            '<a id="restaurants" href="#" data-toggle="modal" data-target="#RestaurantModal" onClick="showRestaurantDetails(this)" item=' + count + '>' +
            '<img src=' + thumbnail + ' class="thumb_img"/>' +
            '</a>' +
            '<br><span style="font-size: 115%; font-family: "Nirmala UI"; >Rating &nbsp;' + AverageRating + '/5&nbsp;</span><span class="glyphicon glyphicon-star" aria-hidden="true"></span><br>' +
            '<button href="#" data-toggle="modal" data-target="#reviewModal" item="' + count + '" type="button" class="btn btn-sm" onClick="showRestaurantComments(this)" style="width:263px; justify-content:center; color:black"; font-size: 60px; font-family: Nirmala UI;>Reviews</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        table.insertAdjacentHTML('beforeend', cell);
    }
    document.getElementById("parent").textContent = "";
}

//This function is to display the individual restaurants details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;

    //Gmaps api start
    var locations = [restaurant_array[item].restaurant_name, restaurant_array[item].location_longitude, restaurant_array[item].location_latitude];
    map = new google.maps.Map(document.getElementById("map"), { center: { lat: 1.8, lng: 110.9 }, zoom: 4 })
    var infoWindow = new google.maps.InfoWindow();
    var marker, i;
    var markers = [];

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[2], locations[1]),
        map: map,
        icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/restaurant.png"
        }
    });

    markers.push(marker);
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infoWindow.setContent(locations[0])
            infoWindow.open(map, marker);
        }
    })(marker, i));

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            map.setCenter(pos);
            map.setZoom(15);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(pos.lat, pos.lng),
                map: map,
                icon: {
                    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }
            })
            markers.push(marker);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infoWindow.setContent("Your current location")
                    infoWindow.open(map, marker);
                }
            })(marker, i));
        }
    )
    //Gmaps api end

    document.getElementById("restaurant_name").textContent = restaurant_array[item].restaurant_name;
    document.getElementById("restaurant_picture").src = restaurant_array[item].restaurant_picture;
    document.getElementById("description").textContent = restaurant_array[item].restaurant_description;
    document.getElementById("location").textContent = restaurant_array[item].location_address;
    document.getElementById("website").textContent = restaurant_array[item].contact_weblink;
    document.getElementById("num").textContent = restaurant_array[item].contact_num;
    document.getElementById("email").textContent = restaurant_array[item].contact_email;

    document.getElementById("mon").textContent = restaurant_array[item].mon;
    document.getElementById("tue").textContent = restaurant_array[item].tue;
    document.getElementById("wed").textContent = restaurant_array[item].wed;
    document.getElementById("thurs").textContent = restaurant_array[item].thurs;
    document.getElementById("fri").textContent = restaurant_array[item].fri;
    document.getElementById("sat").textContent = restaurant_array[item].sat;
    document.getElementById("sun").textContent = restaurant_array[item].sun;

    document.getElementById("tags1").textContent = restaurant_array[item].tags_1;
    document.getElementById("tags2").textContent = restaurant_array[item].tags_2;
    document.getElementById("tags3").textContent = restaurant_array[item].tags_3;
    document.getElementById("tags4").textContent = restaurant_array[item].tags_4;

    document.getElementById("avrg_rating").textContent = restaurant_array[item].overallrating;
}


function getusername() {
    var username = sessionStorage.getItem("username");
    document.getElementById("username").textContent = username;
}

