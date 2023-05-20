const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("The Server is Running on Port 3000");
});
