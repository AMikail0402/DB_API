"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.query = void 0;
var Client = require('pg').Client;
var client = new Client({
    host: "localhost",
    user: "admin",
    port: "5432",
    password: "admin",
    database: "datenbank"
});
exports.client = client;
function query(query, callBack) {
    client.query(query, function (err, res) {
        if (!err) {
            console.log("Ergebnis in db.ts" + JSON.stringify(res.rows));
            return callBack(null, "Successful Operation");
        }
        else {
            return callBack(err, "Operation not permitted");
        }
    });
}
exports.query = query;
client.connect();
