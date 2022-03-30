"use strict";
const Tags_DB = require('../Models/Tags_DB');

var tags_DB = new Tags_DB();

function getTags(request, respond) {
    tags_DB.getTags(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = { getTags };