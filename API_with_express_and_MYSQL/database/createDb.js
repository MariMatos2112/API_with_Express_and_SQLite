const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database/db.sqlite", (error) => {
  if (error) console.log(error);
});

db.run(
  "CREATE TABLE IF NOT EXISTS saved_songs (id INTEGER PRIMARY KEY, date DATE NOT NULL, time TIME NOT NULL, song VARCHAR(50) NOT NULL, singer VARCHAR(20) NOT NULL, song_type VARCHAR(20), album VARCHAR(20))",
  (error) => {
    if (error) console.log(error);
  }
);
