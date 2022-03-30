"use strict";
const UserDetails_DB = require('../Models/UserDetails_DB');
const UserDetails = require('../Models/UserDetails');

var jwt = require('jsonwebtoken');
var secret = 'somesecretkey';

const sgMail = require('@sendgrid/mail')

const bcrypt = require('bcrypt');

var userDetails_DB = new UserDetails_DB();


function getUserDetailsDistinct(request, respond) {
    var token = request.body.token;

    try {
        var decoded = jwt.verify(token, secret);
        var username = decoded;
        userDetails_DB.getUserDetailsDistinct(username, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invalid token" });
    }
}

function getProfilepic(request, respond) {
    var token = request.body.token;

    try {
        var decoded = jwt.verify(token, secret);
        var username = decoded;
        userDetails_DB.getProfilepic(username, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invalid token" });
    }
}

function updateUserDetails(request, respond) {
    var email = request.body.user_email;
    var firstname = request.body.user_firstname;
    var lastname = request.body.user_lastname;
    var gender = request.body.user_gender;
    var phonenumber = request.body.user_phonenumber;
    var address = request.body.user_address;
    var profilepicture = request.body.user_profilepicture;

    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret)
        var user = decoded
        userDetails_DB.updateUserDetails(user, email, firstname, lastname, gender, phonenumber, address, profilepicture, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invalid token" });
    }
}

function getLogin(request, respond) {
    var username = request.body.user_username;
    var user_password = request.body.user_password;
    var picture = request.body.user_profilepicture;
    userDetails_DB.getLogin(username, function (error, result) {
        if (error) {
            respond.json(error);
            console.log("Login not successful")
        }
        else {
            if (result[0] == null) {
                respond.json({ output: "user not found" })
            }
            else {
                const hash = result[0].user_password;
                var flag = bcrypt.compareSync(user_password, hash);
                if (flag) {
                    var token = jwt.sign(username, secret);
                    respond.json({ result: token });
                    //console.log(picture)
                }
                else {
                    respond.json({ result2: "invalid" });
                }
            }

        }
    })
}

function addAccount(request, respond) {
    var username = request.body.user_username;
    var password = request.body.user_password;
    var picture = request.body.user_profilepicture;

    password = bcrypt.hashSync(password, 10);
    userDetails_DB.addAccount(username, password, picture, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function deleteAccount(request, respond) {
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret)
        var user = decoded
        userDetails_DB.deleteAccount(user, function (error, result) {
            if (error) {
                respond.json(error);
            }
            else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({ result: "invalid token" });
    }
}

function sendEmail(request, respond) {
    var email = request.body.email;
    var title = request.body.title;
    var content = request.body.content;
    sgMail.setApiKey("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")
    const msg = {
        to: 'makangowhere2022@gmail.com', // Recipient
        from: 'makangowhere2022@gmail.com', // Verified sender
        subject: 'Enquiry and Suggestions',
        text: email + ' ' + content,
        html: '<strong>' + email + '<br>' + title + '<br>' + content + '</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            respond.json({ result: "success" })
        })
        .catch((error) => {
            console.error(error)
            respond.json({ result: "fail" })
        })
}

module.exports = { getProfilepic, updateUserDetails, getLogin, addAccount, deleteAccount, getUserDetailsDistinct, sendEmail }; 