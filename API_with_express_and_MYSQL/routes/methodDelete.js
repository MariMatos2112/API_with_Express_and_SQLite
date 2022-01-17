const sqliteDeleteData = require("../database/deleteData");

module.exports = (app) => {
  app.delete("/delete-song/:id", (request, response) => {
    const songId = request.params.id;
    sqliteDeleteData.deleteSongById(response, songId);
  });
};
