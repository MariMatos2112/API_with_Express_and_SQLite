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

exports.addData = (requisitionBody) => {
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

// exports.getAllData = async function() {
//   const allData = await db.all("SELECT * FROM saved_songs", (error, data) => {
//     return data
//   });
//   const finalData = await allData;
//   await console.log( JSON.stringify())
//   // return allData;
// };

exports.getAllData = (resp) => {
  db.all("SELECT * FROM saved_songs", (error, data) => {
    resp.send(JSON.stringify(data))
  });
}

exports.getSongByName = (resp, songName) => {
  db.all(`SELECT * FROM saved_songs WHERE song LIKE "${songName}"`, (error, data) => {
    resp.send(JSON.stringify(data))
  })
}

exports.getSingerByName = (resp, singerName) => {
  db.all(`SELECT * FROM saved_songs WHERE singer LIKE "${singerName}"`, (error, data) => {
    resp.send(JSON.stringify(data))
  })
}


