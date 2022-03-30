"use strict";
const Review_DB = require('../Models/Review_DB');
const Review = require('../Models/Review');

var review_DB = new Review_DB();

function getReview(request, respond) {
    review_DB.getReview(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function addReview(request, respond) {
    var now = new Date();
    var review = new Review(request.body.restaurant_id, null, request.body.review_price, request.body.review_rating, request.body.review_writeup, now.toString(), request.body.user_username, request.body.review_title);
    review_DB.addReview(review, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    })
}

function editReview(request, respond) {
    var editrev = new Review(request.body.restaurant_id, parseInt(request.params.id), request.body.review_price, request.body.review_rating, request.body.review_writeup, request.body.review_date, request.body.user_username, request.body.review_title);
    review_DB.editReview(editrev, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function deleteReview(request, respond) {
    var delrev = request.params.id;
    review_DB.deleteReview(delrev, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getReview, addReview, editReview, deleteReview };