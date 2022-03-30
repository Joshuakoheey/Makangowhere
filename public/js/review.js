function fetchReviews() {
    var request = new XMLHttpRequest();
    request.open('GET', review_url, true);

    //This command starts the calling of the review api
    request.onload = function () {
        //get all the reviews records into our review array
        review_array = JSON.parse(request.responseText);
        //console.log(review_array)
    };
    request.send();
}


function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userReviews").value = "";
    document.getElementById("reviewtitle").value = "";
}

// Submit or send the new review to the server to be added.
function addReview() {
    var Review = new Object();

    Review.review_rating = rating;
    Review.review_writeup = document.getElementById("userReviews").value;
    Review.review_date = null;
    Review.restaurant_id = restaurant_array[currentIndex].restaurant_id;
    Review.review_title = document.getElementById("reviewtitle").value;
    Review.user_username = sessionStorage.getItem("username");

    //console.log("res id:", Review.restaurant_id)
    //console.log("rev title:", Review.review_title)
    //console.log("rev writeup:", Review.review_writeup)
    //console.log("rev date:", Review.review_date)
    //console.log("rev rating:", Review.review_rating)
    //console.log("res username:", Review.user_username)

    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send review

    postReview.open("POST", review_url, true); //Use the HTTP POST method to send data to server

    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function () {
        //console.log(postReview.responseText)
        //console.log(sessionStorage.getItem("username"))
        fetchReviews(); // fetch all reviews again so that the web page can have updated reviews. 
        location.reload();
    };
    // Convert the data in review object to JSON format before sending to the server.
    postReview.send(JSON.stringify(Review));
}

//This function allows the user to mouse hover the black and white rating
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var ratings = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // rating images to use black and white.
    for (let rating of ratings) {
        rating.setAttribute("src", restaurant_unrated);
    }
    changeratingImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the rating image.
function changeratingImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", restaurant_rated);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", restaurant_rated);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", restaurant_rated);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", restaurant_rated);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", restaurant_rated);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", restaurant_rated);
            rating = 5;
            break;
    }
}


//This function will hide the existing modal and present a modal with the selected review
//so that the user can attempt to change the rating or review
function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editreviewtitle").value = review_array[item].review_title;
    document.getElementById("edituserReviews").value = review_array[item].review_writeup;

    displayColorrating('editrat', review_array[item].review_rating);
}

//This function displayS the correct number of colored rating
//based on the rating that is given in the user review
function displayColorrating(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
        p.setAttribute("src", restaurant_unrated);
    }
    changeratingImage(num, classTarget);
}

//This function sends the review data to the server for updating
function updateReview() {
    var token = sessionStorage.getItem("token");

    if (token != null) {
        if (review_array[currentIndex].user_username == sessionStorage.getItem("username")) {
            var response = confirm("Are you sure you want to update this review?");
            if (response == true) {
                var edit_review_url = review_url + "/" + review_array[currentIndex].review_id;
                var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
                updateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
                updateReview.setRequestHeader("Content-Type", "application/json");
                review_array[currentIndex].review_title = document.getElementById("editreviewtitle").value;
                review_array[currentIndex].review_writeup = document.getElementById("edituserReviews").value;
                review_array[currentIndex].review_rating = rating;
                updateReview.onload = function () {
                    fetchReviews();
                    location.reload();
                };
                updateReview.send(JSON.stringify(review_array[currentIndex]));
            }
        }
    }
}

//This function deletes the selected review in a specific restaurant
function deleteReview(element) {
    var response = confirm("Are you sure you want to delete this review?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_review_url = review_url + "/" + review_array[item].review_id;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function () {
            fetchReviews();
            location.reload();
        };
        eraseReview.send();
    }
}

//This function is to display all the reviews of that restaurant
//whenever the user click on the "reviews" button
function showRestaurantComments(element) {
    document.getElementById("emptyReview").innerHTML = "No reviews yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("review").textContent = "Reviews for " + restaurant_array[item].restaurant_name;
    document.getElementById("reviewBody").textContent = "";

    if (token != null) {
        document.getElementById("newReview").style.display = "block";
        document.getElementById("signupmsg").style.display = "none";
    } else {
        document.getElementById("newReview").style.display = "none";
        document.getElementById("signupmsg").style.display = "block";
    }

    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].restaurant_name.trim() == restaurant_array[item].restaurant_name.trim()) {
            document.getElementById("emptyReview").innerHTML = "";
            star = "";

            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" style="font-family: Nirmala UI; word-wrap: break-word; color: black; text-shadow: none;" id="rating' + i + '"> <br>'
                + '<span style="font-size: large; font-weight: 900;">' +
                review_array[i].review_title + "</span><br>"
                + review_array[i].review_writeup + "</p>               \
                                        <small>by " + review_array[i].user_username + " @ " + review_array[i].review_date + "</small>" +

                "<span class='glyphicon glyphicon-trash' aria-hidden='true' class='edit deleteReview' data-dismiss='modal' id='deleteReview" + i + "' item='" + i + "' onClick='deleteReview(this)' style='display: ; float: right; padding-right: 20px; font-size: 30px; color: darkred' /></span>" +

                "<span class='glyphicon glyphicon-pencil' aria-hidden='true' class='edit editReview' data-toggle='modal' data-target='#editreviewModal' data-dismiss='modal' id='editReview" + i + "' item='" + i + "' onClick='editReview(this)' style='display: ; float: right; padding-right: 20px; font-size: 30px; color: #0E5A66'></span>" +
                "</div>                                                                                          \
                            </div>                                                                                               \
                        </div>"

            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < review_array[i].review_rating; j++) {
                //console.log(i);
                star += "<img src='/images/restaurant_rated.png'' style='width:50px' />";
            }

            //console.log(sessionStorage.getItem("username"))
            //console.log(review_array[i].user_username)

            if (sessionStorage.getItem("username") != review_array[i].user_username) {
                //console.log(document.getElementById("deleteReview0"));
                document.getElementById("deleteReview" + i).style.display = "none";
                document.getElementById("editReview" + i).style.display = "none";
                console.log("Didn't find Match")

            } else {
                document.getElementById("deleteReview" + i).style.display = "block";
                document.getElementById("editReview" + i).style.display = "block";
                console.log("Found Match")
            }
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
            console.log("loaded")

        }
    }
}
