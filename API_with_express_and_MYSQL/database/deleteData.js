const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database/db.sqlite", (error) => {
  if (error) console.log(error);
});

exports.deleteSongById = (response, id) => {
  db.all(`SELECT * FROM saved_songs WHERE id = ${id}`, (error, data) => {
    if (data) {
      if (data.length === 0) {
        response.status(404);
        response.send(`ERROR: The column "${id}" was not found.`);
      } else {
        db.all(`DELETE FROM saved_songs WHERE id = ${id}`, () => {
          response.send("SUCCESS: The song was deleted successfully!");
        });
      }
    } else {
      response.status(400);
      response.send("ERROR: The ID should be an integer, not a string.");
    }
  });
};
