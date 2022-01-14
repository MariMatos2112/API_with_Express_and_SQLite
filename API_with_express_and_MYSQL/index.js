const customExpress = require("./config/customExpress");

const app = customExpress();

app.listen(2000, () => console.log("The server is up..."));
