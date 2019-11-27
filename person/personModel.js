const db = require("../database/dbConfig");

module.exports = { add, find, findByTripId };

function add(personData) {
  return db("person")
    .insert(personData)
    .returning("*");
}

function find() {
  return db("person").select("*");
}

function findByTripId(tripId) {
  return db("person")
    .select("*")
    .where({ "person.trip_id": tripId });
}
