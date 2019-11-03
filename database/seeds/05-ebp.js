exports.seed = function(knex) {
  return knex("expense_by_person").insert([
    {
      amount_paid: 10,
      person_id: 1,
      expense_id: 1
    },

    {
      amount_paid: 8,
      person_id: 2,
      expense_id: 1
    },

    {
      amount_paid: 12,
      person_id: 3,
      expense_id: 1
    },

    {
      amount_paid: 20,
      person_id: 1,
      expense_id: 2
    },

    {
      amount_paid: 20,
      person_id: 2,
      expense_id: 2
    },

    {
      amount_paid: 10,
      person_id: 3,
      expense_id: 2
    },

    {
      amount_paid: 25,
      person_id: 4,
      expense_id: 3
    },

    {
      amount_paid: 30,
      person_id: 5,
      expense_id: 3
    },

    {
      amount_paid: 15,
      person_id: 6,
      expense_id: 3
    },

    {
      amount_paid: 5,
      person_id: 4,
      expense_id: 4
    },

    {
      amount_paid: 30,
      person_id: 5,
      expense_id: 4
    },

    {
      amount_paid: 15,
      person_id: 6,
      expense_id: 4
    },

    {
      amount_paid: 100,
      person_id: 7,
      expense_id: 5
    },

    {
      amount_paid: 50,
      person_id: 8,
      expense_id: 5
    },

    {
      amount_paid: 150,
      person_id: 9,
      expense_id: 5
    },

    {
      amount_paid: 100,
      person_id: 7,
      expense_id: 6
    },

    {
      amount_paid: 10,
      person_id: 8,
      expense_id: 6
    },

    {
      amount_paid: 10,
      person_id: 9,
      expense_id: 6
    },

    {
      amount_paid: 50,
      person_id: 10,
      expense_id: 7
    },

    {
      amount_paid: 90,
      person_id: 11,
      expense_id: 7
    },

    {
      amount_paid: 10,
      person_id: 12,
      expense_id: 7
    },

    {
      amount_paid: 4,
      person_id: 10,
      expense_id: 8
    },

    {
      amount_paid: 4,
      person_id: 11,
      expense_id: 8
    },

    {
      amount_paid: 12,
      person_id: 12,
      expense_id: 8
    },

    {
      amount_paid: 10,
      person_id: 13,
      expense_id: 9
    },

    {
      amount_paid: 20,
      person_id: 14,
      expense_id: 9
    },

    {
      amount_paid: 10,
      person_id: 15,
      expense_id: 9
    },

    {
      amount_paid: 100,
      person_id: 13,
      expense_id: 10
    },

    {
      amount_paid: 100,
      person_id: 14,
      expense_id: 10
    },

    {
      amount_paid: 150,
      person_id: 15,
      expense_id: 10
    }
  ]);
};
