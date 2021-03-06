const express = require("express");
const consign = require("consign");

module.exports = () => {
  const app = express();

  app.use(express.urlencoded())
  app.use(express.json())

  consign().include("routes").into(app);
  return app;
};
