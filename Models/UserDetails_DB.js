"use strict";

var db = require('../db-connection');
class UserDetails_DB {
    getUserDetailsDistinct(username, callback) {
        var sql = "SELECT DISTINCT user_username, user_email, user_firstname, user_lastname, user_gender, user_phonenumber, user_address, user_profilepicture from makangowhere_db.userdetails WHERE user_username = ?";
        db.query(sql, [username], callback);
    }

    updateUserDetails(username, email, firstname, lastname, gender, phonenumber, address, profilepicture, callback) {
        var sql = "UPDATE userdetails SET user_email = ?, user_firstname = ?, user_lastname = ?, user_gender = ?, user_phonenumber = ?, user_address = ?, user_profilepicture = ? WHERE user_username = ?";
        //console.log(username)
        return db.query(sql, [email, firstname, lastname, gender, phonenumber, address, profilepicture, username], callback);
    }

    getLogin(username, callback) {
        var sql = "SELECT user_password, user_profilepicture from userdetails WHERE user_username = ?";
        db.query(sql, [username], callback);
    }

    addAccount(username, password, picture, callback) {
        var sql = "INSERT INTO userdetails (user_username, user_password, user_profilepicture) VALUES (?, ?, ?)";
        db.query(sql, [username, password, picture], callback);
    }

    deleteAccount(delacc, callback) {
        var sql = "DELETE FROM userdetails WHERE user_username = ?";
        return db.query(sql, [delacc], callback);
    }

    getProfilepic(username, callback) {
        var sql = "SELECT user_profilepicture from makangowhere_db.userdetails WHERE user_username = ?";
        db.query(sql, [username], callback);
    }
}

module.exports = UserDetails_DB;