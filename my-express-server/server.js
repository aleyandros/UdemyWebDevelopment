const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: alex@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("<h1>Express.Js</h1><h2>This site was created by Alex Patiño</h2>");
});

app.get("/hobbies", function (req, res) {
  res.send("Example");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
