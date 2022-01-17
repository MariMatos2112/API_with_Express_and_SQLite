const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database/db.sqlite", (error) => {
  if (error) console.log(error);
});

exports.addSong = (requisitionBody) => {
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
        if (error) return error;
      }
    );
    return "The data was saved successfully!";
  } else {
    return "Some columns cannot be empty. Please fill them.";
  }
};
