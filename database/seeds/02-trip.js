exports.seed = function(knex) {
  return knex("trip").insert([
    {
      title: "Concert",
      date: "10-25-2019",
      user_id: 1
    },

    {
      title: "Beach",
      date: "10-26-2019",
      user_id: 1
    },

    {
      title: "Amusement Park",
      date: "10-27-2019",
      user_id: 1
    },

    {
      title: "Skiing",
      date: "10-28-2019",
      user_id: 1
    },

    {
      title: "Camping",
      date: "10-29-2019",
      user_id: 1
    }
  ]);
};
