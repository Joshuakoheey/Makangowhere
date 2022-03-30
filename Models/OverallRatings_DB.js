"use strict";

var db = require('../db-connection');

class OverallRatings_DB {
    sortRestaurantByRating(callback) {
        var sql = "SELECT restaurantinfo.*, overallratings.overallrating, overallratings.overallprice , openinghours.*, alltags.* FROM overallratings INNER JOIN restaurantinfo ON overallratings.restaurant_id = restaurantinfo.restaurant_id INNER JOIN openinghours ON openinghours.restaurant_id = restaurantinfo.restaurant_id INNER JOIN alltags ON alltags.restaurant_id = restaurantinfo.restaurant_id ORDER BY overallrating DESC";
        db.query(sql, callback);
    }
}

module.exports = OverallRatings_DB;