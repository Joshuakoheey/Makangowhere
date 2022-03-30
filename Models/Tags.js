"use strict";

class Tags {
    constructor(restaurant_id, tags, tags_id) {
        
        this.tags_id = tags_id;
        this.restaurant_id = restaurant_id;
        this.tags = tags;
    }

    getTags_id() {
        return this.tags_id;
    }

    getTags() {
        return this.tags;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }
}

class TagsByName {
    constructor(tags, restaurant_id, tags_id) {
        
        this.tags_id = tags_id;
        this.restaurant_id = restaurant_id;
        this.tags = tags;
    }

    getTags_id() {
        return this.tags_id;
    }

    getTags() {
        return this.tags;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }
}

module.exports = Tags, TagsByName;