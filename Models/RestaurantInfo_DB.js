"use strict";

var db = require('../db-connection');
class RestaurantInfo_DB {

    showAllRestaurants(callback) {
        var sql = "SELECT restaurantinfo.*, overallratings.*, openinghours.*, alltags.* FROM restaurantinfo INNER JOIN overallratings ON overallratings.restaurant_id = restaurantinfo.restaurant_id INNER JOIN openinghours ON openinghours.restaurant_id = restaurantinfo.restaurant_id INNER JOIN alltags ON alltags.restaurant_id = restaurantinfo.restaurant_id;";
        db.query(sql, callback);
    }
}

module.exports = RestaurantInfo_DB;