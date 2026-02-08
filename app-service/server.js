const express = require("express");

const app = express();

app.use(express.static("wwwroot"));

app.listen(9000, () => console.log("Server listening in 9000"));
