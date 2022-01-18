const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database/db.sqlite", (error) => {
  if (error) console.log(error);
});

// Method POST: Add a song in the database
exports.addSong = (response ,requisitionBody) => {
  if (requisitionBody.song && requisitionBody.singer) {
    db.run(
      "INSERT INTO saved_songs (date, time, song, singer, song_type, album) VALUES (?, ?, ?, ?, ?, ?)",
      [
        requisitionBody.date,
        requisitionBody.time,
        requisitionBody.song,
        requisitionBody.singer,
        requisitionBody.song_type,
        requisitionBody.album,
      ],
      (error) => {
        if (error) response.send(error);
      }
    );
    response.send("The data was saved successfully!");
  } else {
    response.status(400);
    response.send("Some columns cannot be empty. Please fill them.");
  }
};
