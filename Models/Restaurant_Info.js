"use strict";

class Restaurant_Info {
    constructor(restaurant_id, restaurant_name, restaurant_picture, restaurant_description, location_address, location_latitude, location_longitude, contact_num, contact_email, contact_weblink) {
        
        this.restaurant_id = restaurant_id;
        this.restaurant_name = restaurant_name;
        this.restaurant_picture = restaurant_picture;
        this.restaurant_description = restaurant_description;
        this.location_address = location_address;
        this.location_latitude = location_latitude;
        this.location_longitude = location_longitude;
        this.contact_num = contact_num;
        this.contact_email = contact_email;
        this.contact_weblink = contact_weblink;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }

    getRestaurantName() {
        return this.restaurant_name;
    }

    getRestaurantPic() {
        return this.restaurant_picture;
    }

    getRestaurantDesc() {
        return this.restaurant_description;
    }

    getRestaurantAddress() {
        return this.location_address;
    }

    getRestaurantLat() {
        return this.location_latitude;
    }

    getRestaurantLong() {
        return this.location_longitude;
    }

    getRestaurantNum() {
        return this.contact_num;
    }

    getRestaurantEmail() {
        return this.contact_email;
    }

    getRestaurantLink() {
        return this.contact_weblink;
    }
}

module.exports = Restaurant_Info;