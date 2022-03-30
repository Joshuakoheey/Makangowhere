"use strict";
const EditorsChoice_DB = require('../Models/EditorsChoice_DB');

var editorsChoice_DB = new EditorsChoice_DB();

function getEditorsChoice(request, respond){
    editorsChoice_DB.getEditorsChoice(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getEditorsChoice};