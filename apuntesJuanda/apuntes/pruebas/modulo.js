const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(data);
  console.log(res);
});
app.listen(3000);
