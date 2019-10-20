exports.up = function(knex) {
  return knex.schema
    .createTable("user", user => {
      user.increments();
      user.string("name", 50).notNullable();
      user
        .string("email", 320)
        .notNullable()
        .unique();
      user.password("string", 100).notNullable;
    })

    .createTable("person", person => {
      person.increments();
      person.string("name", 50);
      person
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })

    .createTable("expense", expense => {
      expense.increments();
      expense.string("title", 50).notNullable();
      expense.integer("amount", 20).notNullable();
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

exports.down = function(knex) {};
