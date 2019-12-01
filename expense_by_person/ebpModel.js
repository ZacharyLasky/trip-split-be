const db = require("../database/dbConfig");

module.exports = { add, find, findByPersonId, findByExpenseId };

function add(ebpData) {
  return db("expense_by_person")
    .insert(ebpData)
    .returning("*");
}

function find() {
  return db("expense_by_person").select("*");
}

function findByPersonId(personId) {
  return db("expense_by_person")
    .select("*")
    .where({ "expense_by_person.person_id": personId });
}

function findByExpenseId(expenseId) {
  return db("expense_by_person")
    .select("*")
    .where({ "expense_by_person.expense_id": expenseId });
}
