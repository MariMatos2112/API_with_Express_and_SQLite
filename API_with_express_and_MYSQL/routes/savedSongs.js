const sqliteDb = require("../database/createDb");
// const addDataToSqlite = sqliteDb.addData;

module.exports = (app) => {
  app.get("/all-songs", (request, response) => {
    sqliteDb.getAllData(response);
  });

  app.get("/song/:song", (request, response) => {
    const song = request.params.song;
    sqliteDb.getSongByName(response, song);
  })

  app.get("/singer/:singer", (request, response) => {
    const singer = request.params.singer;
    sqliteDb.getSingerByName(response, singer);
  })

  // app.get("/song-and-singer/:song/:singer", (request, response) => {
  //   const song = request.params.song;
  //   const singer = request.params.singer;
  //   sqliteDb.getSingerByName(response, singerName);
  // })



  app.post("/add-song", (request, response) => {
    let currentDateTime = new Date();

    requisitionBody = {
      ...req.body,
      date: `${currentDateTime.getFullYear()}-${currentDateTime.getMonth() + 1}-${currentDateTime.getDate()}`,
      time: `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`,
    };

    apiResponse = sqliteDb.addData(requisitionBody);

    resp.send(apiResponse);
  });
};
