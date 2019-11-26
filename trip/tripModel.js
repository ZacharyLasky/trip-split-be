const db = require("../database/dbConfig");

module.exports = { add };

function add() {
  return db("trip")
    .insert()
    .returning("*");
}
