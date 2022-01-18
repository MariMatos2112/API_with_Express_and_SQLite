const sqlite3 = require("sqlite3");
const sqliteCreateTable = require("./createTable"); 

const db = new sqlite3.Database("./database/db.sqlite", (error) => {
  if (error) console.log(error);
});

sqliteCreateTable.createTable();

// Method GET: Get all data from the db
exports.getAllData = (resp) => {
  db.all("SELECT * FROM saved_songs", (error, data) => {
    if (error) console.log(error);
    resp.send(JSON.stringify(data));
  });
};

// Method GET: Get data from a specific song
exports.getSongByName = (resp, song) => {
  db.all(
    `SELECT * FROM saved_songs WHERE song LIKE "${song}"`,
    (error, data) => {
      if (error) console.log(error);
      resp.send(JSON.stringify(data));
    }
  );
};

// Method GET: Get data from a specific singer
exports.getSingerByName = (resp, singer) => {
  db.all(
    `SELECT * FROM saved_songs WHERE singer LIKE "${singer}"`,
    (error, data) => {
      if (error) console.log(error);
      resp.send(JSON.stringify(data));
    }
  );
};

// Method GET: Get data from a specific song and singer
exports.getSongAndSinger = (resp, song, singer) => {
  db.all(
    `SELECT * FROM saved_songs WHERE song LIKE "${song}" AND singer LIKE "${singer}"`,
    (error, data) => {
      if (error) console.log(error);
      resp.send(JSON.stringify(data));
    }
  );
};
