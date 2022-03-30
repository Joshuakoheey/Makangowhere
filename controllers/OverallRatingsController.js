"use strict";
const OverallRatings_DB = require('../Models/OverallRatings_DB');
const OverallRatings = require('../Models/Overall_Ratings');

var overallRatings_DB = new OverallRatings_DB();

function sortRestaurantByRating(request, respond){
    overallRatings_DB.sortRestaurantByRating(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {sortRestaurantByRating};