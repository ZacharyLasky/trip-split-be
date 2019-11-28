const db = require("../database/dbConfig");

module.exports = { add, find, findLast };

function add(tripData) {
  return db("trip")
    .insert(tripData)
    .returning("*");
}

function find() {
  return db("trip").select("*");
}

function findLast() {
  return db("trip")
    .select("*")
    .orderBy("title", "desc")
    .limit(1);
}
