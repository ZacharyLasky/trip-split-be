const db = require("../database/dbConfig");

module.exports = { add, find };

function add(personData) {
  return db("person")
    .insert(personData)
    .returning("*");
}

function find() {
  return db("person").select("*");
}
