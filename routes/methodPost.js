const sqlitePostData = require("../database/postData");

module.exports = (app) => {
  app.post("/add-song", (request, response) => {
    let currentDateTime = new Date();

    requisitionBody = {
      ...request.body,
      date: `${currentDateTime.getFullYear()}-${currentDateTime.getMonth() + 1}-${currentDateTime.getDate()}`,
      time: `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`,
    };

    sqlitePostData.addSong(response, requisitionBody);
  });
};
