const db = require("../database/dbConfig");

module.exports = { add };

function add(tripData) {
  return db("trip")
    .insert(tripData)
    .returning("*");
}
