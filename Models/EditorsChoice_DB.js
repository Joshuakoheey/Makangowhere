"use strict";

var db = require('../db-connection');

class EditorsChoice_DB{
    getEditorsChoice(callback){
        var sql = "SELECT editorschoice.editorschoice_id, restaurantinfo.restaurant_name, restaurantinfo.restaurant_picture, restaurantinfo.restaurant_id FROM editorschoice INNER JOIN restaurantinfo ON editorschoice.restaurant_id = restaurantinfo.restaurant_id;";
        db.query(sql, callback);
    }
}

module.exports = EditorsChoice_DB;