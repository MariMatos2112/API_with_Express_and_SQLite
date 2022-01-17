const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database/db.sqlite", (error) => {
  if (error) console.log(error);
});

exports.deleteSongById = (response, id) => {
  db.all(`DELETE FROM saved_songs WHERE id = ${id}`, (error, data) => {
    if (error) response.send(`ERROR: The column "${id}" was not found.`);
    else response.send('SUCCESS: The song was deleted successfully.');
  });
};
