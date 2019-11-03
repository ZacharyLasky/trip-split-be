exports.seed = function(knex) {
  return knex("person").insert([
    {
      name: "James",
      trip_id: 1
    },

    {
      name: "Bill",
      trip_id: 1
    },

    {
      name: "Jordan",
      trip_id: 1
    },

    {
      name: "Ryan",
      trip_id: 2
    },

    {
      name: "Steve",
      trip_id: 2
    },

    {
      name: "Phil",
      trip_id: 2
    },

    {
      name: "Frank",
      trip_id: 3
    },

    {
      name: "Kevin",
      trip_id: 3
    },

    {
      name: "Joe",
      trip_id: 3
    },

    {
      name: "Jim",
      trip_id: 4
    },

    {
      name: "Charlie",
      trip_id: 4
    },

    {
      name: "Evan",
      trip_id: 4
    },

    {
      name: "Jan",
      trip_id: 5
    },

    {
      name: "Hannah",
      trip_id: 5
    },

    {
      name: "Lili",
      trip_id: 5
    }
  ]);
};
