const db = require("../database/dbConfig");

module.exports = { add, find, findByUserId, findLast };

function add(tripData) {
  return db("trip")
    .insert(tripData)
    .returning("*");
}

function find() {
  return db("trip").select("*");
}

function findLast(userId) {
  return db("trip")
    .select("*")
    .orderBy("title", "desc")
    .limit(1)
    .where({ "trip.user_id": userId });
}

function findByUserId(userId) {
  return db("trip")
    .select("*")
    .where({ "trip.user_id": userId });
}
