const db = require("../database/dbConfig");

module.exports = { add, find };

function add(ebpData) {
  return db("expense_by_person")
    .insert(ebpData)
    .returning("*");
}

function find() {
  return db("expense_by_person").select("*");
}
