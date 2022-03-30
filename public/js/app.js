var bypopularity = "/Popularity";
var allrestaurants = "/AllRestaurants";
var review_url = "/Review";
var tags_url = "/Tags";
var user_url = "/Retrievedeets"

var restaurant_array = []; // This creates an empty restaurant array
var review_array = []; // This creates an empty review array
var user_array = []; // This creates an empty user array

var restaurantCount = 0;
var currentIndex = 0;
var rating = 0;

var restaurant_rated = '/images/restaurant_rated.png';
var restaurant_unrated = '/images/restaurant_unrated.png';


// Search Bar
function searchProduct() {
    const input = document.getElementById('filter').value.toUpperCase();

    const cardContainer = document.getElementById('restaurants');
    const cards = cardContainer.getElementsByClassName('cardy');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".mystyle span.card-title");
        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        }
        else {
            cards[i].style.display = "none";
        }
    }
}