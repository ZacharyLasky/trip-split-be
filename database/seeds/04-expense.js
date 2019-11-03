exports.seed = function(knex) {
  return knex("expense").insert([
    {
      title: "Gas",
      amount: 30,
      trip_id: 1
    },

    {
      title: "Food",
      amount: 50,
      trip_id: 1
    },

    {
      title: "Towels",
      amount: 70,
      trip_id: 2
    },

    {
      title: "Umbrellas",
      amount: 50,
      trip_id: 2
    },

    {
      title: "Tickets",
      amount: 300,
      trip_id: 3
    },

    {
      title: "Swimsuits",
      amount: 120,
      trip_id: 3
    },

    {
      title: "Ski Rentals",
      amount: 150,
      trip_id: 4
    },

    {
      title: "Cocoa",
      amount: 20,
      trip_id: 4
    },

    {
      title: "Flashlights",
      amount: 40,
      trip_id: 5
    },

    {
      title: "Tents",
      amount: 350,
      trip_id: 5
    }
  ]);
};
