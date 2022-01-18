const sqliteGetData = require("../database/getData")

module.exports = (app) => {
  app.get("/all-songs", (request, response) => {
    sqliteGetData.getAllData(response);
  });

  app.get("/song/:song", (request, response) => {
    const song = request.params.song;
    sqliteGetData.getSongByName(response, song);
  });

  app.get("/singer/:singer", (request, response) => {
    const singer = request.params.singer;
    sqliteGetData.getSingerByName(response, singer);
  });

  app.get("/song-and-singer/:song/:singer", (request, response) => {
    const song = request.params.song;
    const singer = request.params.singer;
    sqliteGetData.getSongAndSinger(response, song, singer);
  });
};
