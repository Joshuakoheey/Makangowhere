"use strict";

class Review {
    constructor(restaurant_id, review_id, review_price, review_rating, review_writeup, review_date, user_username, review_title) {
        
        this.review_id = review_id;
        this.restaurant_id = restaurant_id;
        this.review_price = review_price;
        this.review_rating = review_rating;
        this.review_writeup = review_writeup;
        this.review_date = review_date;
        this.user_username = user_username;
        this.review_title = review_title;
    }

    getReview_id() {
        return this.review_id;
    }

    getReview_price() {
        return this.review_price;
    }

    getReview_rating() {
        return this.review_rating;
    }

    getReview_writeup() {
        return this.review_writeup;
    }

    getReview_date() {
        return this.review_date;
    }

    getUser_username() {
        return this.user_username;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }

    getReview_title(){
        return this.review_title;
    }

}

module.exports = Review;