const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

//Let the folder "public" as static +> public can be used for CSS, Images, Sounds & JS
app.use(express.static("public"));

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");

const itemsSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Go to gym",
});

const item2 = new Item({
  name: "Study hard & Smart",
});

const item3 = new Item({
  name: "Eat pizza!",
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems);

app.get("/", function (req, res) {
  awaitFind();
  async function awaitFind() {
    try {
      const items = await Item.find({});

      if (items.length === 0) {
        Item.insertMany(defaultItems);
        res.redirect("/");
      } else {
        res.render("list", { listTitle: "Today", newListItem: items });
      }
    } catch (err) {
      handleError(err);
    }
  }
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName,
  });

  item.save();
  res.redirect("/");
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemId).then(function (err) {});
  res.redirect("/");
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
