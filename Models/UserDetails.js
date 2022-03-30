"use strict";

class UserDetails {
    constructor(userdetails_id, user_username, user_password, user_email, user_firstname, user_lastname, user_gender, user_phonenumber, user_address, user_profilepicture) {
        
        this.userdetails_id = userdetails_id;
        this.user_username = user_username;
        this.user_password = user_password;
        this.user_email = user_email;
        this.user_firstname = user_firstname;
        this.user_lastname = user_lastname;
        this.user_gender = user_gender;
        this.user_phonenumber = user_phonenumber;
        this.user_address = user_address;
        this.user_profilepicture = user_profilepicture;
    }

    getUserdetails_id() {
        return this.userdetails_id;
    }

    getUser_username() {
        return this.user_username;
    }

    getUser_password() {
        return this.user_password;
    }

    getUser_email() {
        return this.user_email;
    }

    getUser_firstname() {
        return this.user_firstname;
    }

    getUser_lastname() {
        return this.user_lastname;
    }

    getUser_gender() {
        return this.user_gender;
    }

    getUser_phonenumber() {
        return this.user_phonenumber;
    }

    getUser_address() {
        return this.user_address;
    }

    getUser_profilepicture() {
        return this.user_profilepicture;
    }

}

module.exports = UserDetails;