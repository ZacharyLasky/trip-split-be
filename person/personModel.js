const db = require("../database/dbConfig");

module.exports = { add };

function add(personData) {
  return db("person")
    .insert(personData)
    .returning("*");
}
