const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").insert([
    {
      name: "John Doe",
      email: "user1@gmail.com",
      password: bcrypt.hashSync("password")
    },

    {
      name: "Jim Smith",
      email: "user2@gmail.com",
      password: bcrypt.hashSync("password")
    },

    {
      name: "Jane Stewart",
      email: "user3@gmail.com",
      password: bcrypt.hashSync("password")
    },

    {
      name: "Beth Stevenson",
      email: "user4@gmail.com",
      password: bcrypt.hashSync("password")
    },

    {
      name: "Steve Jordan",
      email: "user5@gmail.com",
      password: bcrypt.hashSync("password")
    }
  ]);
};
