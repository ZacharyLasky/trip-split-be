const db = require("../database/dbConfig");

module.exports = { add, find, findByTripId };

function add(expenseData) {
  return db("expense")
    .insert(expenseData)
    .returning("*");
}

function find() {
  return db("expense").select("*");
}

function findByTripId(tripId) {
  return db("expense")
    .select("*")
    .where({ "expense.trip_id": tripId });
}
