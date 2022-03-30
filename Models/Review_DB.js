"use strict";

var db = require('../db-connection');
class Review_DB {
    getReview(callback) {
        var sql = "SELECT review.*, userdetails.user_profilepicture, userdetails.userdetails_id, userdetails.user_username, restaurantinfo.restaurant_name FROM review INNER JOIN userdetails ON userdetails.user_username = review.user_username INNER JOIN restaurantinfo ON review.restaurant_id = restaurantinfo.restaurant_id;";
        db.query(sql, callback);
    }

    addReview(review, callback) {
        var sql = "INSERT INTO review (review_price, review_rating, review_writeup, review_date, restaurant_id, review_title, user_username) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getReview_price(), review.getReview_rating(), review.getReview_writeup(), review.getReview_date(), review.getRestaurantId(), review.getReview_title(), review.getUser_username()], callback);
        var sql1 = "UPDATE overallratings SET overallprice = (SELECT CAST(AVG(review_price) AS DECIMAL(3,2)) FROM review WHERE restaurant_id = ?) WHERE restaurant_id = ?";
        db.query(sql1, [review.getRestaurantId(), review.getRestaurantId()]);
        var sql2 = "UPDATE overallratings SET overallrating = (SELECT CAST(AVG(review_rating) AS DECIMAL(3,2)) FROM review WHERE restaurant_id = ?) WHERE restaurant_id = ?";
        db.query(sql2, [review.getRestaurantId(), review.getRestaurantId()]);
    }

    editReview(editrev, callback) {
        var sql = "UPDATE review SET review_rating = ?, review_writeup = ?, review_title = ? WHERE review_id = ?";
        db.query(sql, [editrev.getReview_rating(), editrev.getReview_writeup(), editrev.getReview_title(), editrev.getReview_id()], callback);
        var sql1 = "UPDATE overallratings SET overallprice = (SELECT CAST(AVG(review_price) AS DECIMAL(3,2)) FROM review WHERE review.restaurant_id = ?) WHERE overallratings.restaurant_id = ?";
        db.query(sql1, [editrev.getRestaurantId(), editrev.getRestaurantId()]);
        var sql2 = "UPDATE overallratings SET overallrating = (SELECT CAST(AVG(review_rating) AS DECIMAL(3,2)) FROM review WHERE review.restaurant_id = ?) WHERE overallratings.restaurant_id = ?";
        db.query(sql2, [editrev.getRestaurantId(), editrev.getRestaurantId()]);
    }

    deleteReview(delrev, callback) {
        var sql = "DELETE FROM review WHERE review_id = ?";
        db.query(sql, [delrev], callback);
    }
}

module.exports = Review_DB;