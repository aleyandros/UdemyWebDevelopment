const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

//Let the folder "public" as static +> public can be used for CSS, Images, Sounds & JS
app.use(express.static("public"));

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://ayopatincha:Ale230300@cluster0.69nedei.mongodb.net/todolistDB");

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

const listSchema = {
  name: String,
  items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

//Item.insertMany(defaultItems);

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

app.get("/:customListName", function (req, res) {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName })
    .then(function (foundList) {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defaultItems,
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", {
          listTitle: foundList.name,
          newListItem: foundList.items,
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName })
      .then(function (foundList) {
        foundList.items.push(item);
        foundList.save();
        res.redirect("/" + listName);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId).then(function (err) {});
    res.redirect("/");
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } }
    ).then(function (err) {
      res.redirect("/" + listName);
      console.log(err);
    });
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
