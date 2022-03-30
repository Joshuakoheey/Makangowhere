"use strict";

const express = require("express");

var RestaurantInfoController = require('./controllers/RestaurantInfoController');
var ReviewController = require('./controllers/ReviewController');
var TagsController = require('./controllers/TagsController');
var UserDetailsController = require('./controllers/UserDetailsController');
var EditorsChoiceController = require('./controllers/EditorsChoiceController');
var OverallRatingsController = require('./controllers/OverallRatingsController');

const bodyParser = require("body-parser");
var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home Page
app.route('/EditorsChoice').get(EditorsChoiceController.getEditorsChoice); // Populates the carousel
app.route('/Popularity').get(OverallRatingsController.sortRestaurantByRating); // Arranges all restaurants by rating in desc order

// To get Tags
app.route('/Tags').get(TagsController.getTags); // To get Tags

// All Restaurants Page
app.route('/AllRestaurants').get(RestaurantInfoController.showAllRestaurants); // Show all restaurants

// Account Management
app.route('/Signup').post(UserDetailsController.addAccount); // User Signup
app.route('/UpdateUserDetails').put(UserDetailsController.updateUserDetails); // Update Profile
app.route('/DeleteAcc').delete(UserDetailsController.deleteAccount); // Delete Account
app.route('/Login').post(UserDetailsController.getLogin); // User Login
app.route('/RetrieveDeets').post(UserDetailsController.getUserDetailsDistinct); // Retrieve profile information for display
app.route('/pfp').post(UserDetailsController.getProfilepic); // Update profile pic

// Contact Page
app.route('/email').post(UserDetailsController.sendEmail); // Write Email

// Writing and Editing a review
app.route('/Review').get(ReviewController.getReview); // To get all reviews
app.route('/Review').post(ReviewController.addReview); // Add Review
app.route('/Review/:id').delete(ReviewController.deleteReview); // Delete Review
app.route('/Review/:id').put(ReviewController.editReview); // Edit Review

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
