"use strict";
const RestaurantInfo_DB = require('../Models/RestaurantInfo_DB');
const Search = require('../Models/Restaurant_Info');
const Display = require('../Models/Restaurant_Info');

var restaurantInfo_DB = new RestaurantInfo_DB();

function showAllRestaurants(request, respond) {
    restaurantInfo_DB.showAllRestaurants(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { showAllRestaurants };