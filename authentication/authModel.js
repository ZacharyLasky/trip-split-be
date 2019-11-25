const db = require("../database/dbConfig");

module.exports = {
  add,
  findBy,
  find
};

function add(userData) {
  return db("user")
    .insert(userData)
    .returning("*");
}

function findBy(filter) {
  return db("user")
    .where(filter)
    .select("id", "name", "email", "password");
}

function find() {
  return db("user").select("id", "name", "email");
}
