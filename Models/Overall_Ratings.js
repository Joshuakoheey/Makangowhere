"use strict";

class Overall_Ratings {
    constructor(overallratings_id, restaurant_id, overallrating, overallprice) {
        
        this.overallratings_id = overallratings_id;
        this.restaurant_id = restaurant_id;
        this.overallrating = overallrating;
        this.overallprice = overallprice;
    }

    getOverallratingsId() {
        return this.overallratings_id;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }

    getOverallRating() {
        return this.overallrating;
    }

    getOverallPrice() {
        return this.overallprice;
    }
}

module.exports = Overall_Ratings;