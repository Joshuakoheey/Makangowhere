"use strict";

var db = require('../db-connection');
class Tags_DB {
    getTags(callback) {
        var sql = "SELECT * from alltags";
        db.query(sql, callback);
    }
}

module.exports = Tags_DB;