require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD, // need to create a .env file to save the password.
    database: "recipefinder_db", // replace with your server name.
    host: "localhost",
    dialect: "mysql",
  },
};