let today = new Date();
let mm = String(today.getMonth() + 1).padStart(2, "0");
let dd = String(today.getDate()).padStart(2, "0");
let yyyy = today.getFullYear();
let date = `${mm}-${dd}-${yyyy}`;

exports.up = function(knex) {
  return knex.schema
    .createTable("user", user => {
      user.increments();
      user.string("name", 50).notNullable();
      user
        .string("email", 320)
        .notNullable()
        .unique();
      user.string("password", 100).notNullable;
    })

    .createTable("trip", trip => {
      trip.increments();
      trip.string("title", 100).notNullable();
      trip.string("date").default(date);
      trip
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("person", person => {
      person.increments();
      person.string("name", 50);
      person
        .integer("trip_id")
        .notNullable()
        .references("id")
        .inTable("trip")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("expense", expense => {
      expense.increments();
      expense.string("title", 50).notNullable();
      expense.integer("amount", 20).notNullable();
      expense
        .integer("trip_id")
        .notNullable()
        .references("id")
        .inTable("trip")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("expense_by_person", ebp => {
      ebp.increments();
      ebp.integer("amount_paid", 20);
      ebp
        .integer("person_id")
        .notNullable()
        .references("id")
        .inTable("person")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      ebp
        .integer("expense_id")
        .notNullable()
        .references("id")
        .inTable("expense")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("expense_by_person")
    .dropTableIfExists("expense")
    .dropTableIfExists("person")
    .dropTableIfExists("trip")
    .dropTableIfExists("user");
};
