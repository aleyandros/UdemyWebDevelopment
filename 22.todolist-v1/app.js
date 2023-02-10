const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

const items = ["Go to gym", "Drink water", "Sleep enough"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

//Let the folder "public" as static +> public can be used for CSS, Images, Sounds & JS
app.use(express.static("public"));

app.get("/", function (req, res) {
  //from date.js - Se usa una de las dos funciones
  const day = date.getDay();
  res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

//
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
