const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

////////////////////Requests Targetting All Articles////////////////////

app
  .route("/articles")
  .get(async (req, res) => {
    try {
      const articles = await Article.find({});
      res.send(articles);
    } catch (err) {
      res.send(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newArticle = new Article({
        title: req.body.title,
        content: req.body.content,
      });
      newArticle.save();
      res.send("Successfully added a new article.");
    } catch (err) {
      res.send(err);
    }
  })
  .delete(async (req, res) => {
    try {
      Article.deleteMany({}).then(res.send("Successfully deleted articles."));
    } catch (err) {
      res.send(err);
    }
  });

////////////////////Requests Targetting A Specific Article////////////////////

app
  .route("/articles/:articleTitle")
  .get(async (req, res) => {
    try {
      const article = await Article.findOne({ title: req.params.articleTitle });
      if (article) {
        res.send(article);
      } else {
        res.send("No articles matching that title was found.");
      }
    } catch (err) {
      res.send(err);
    }
  })
  .put(function (req, res) {
    try {
      Article.replaceOne(
        { title: req.params.articleTitle },
        { title: req.body.title, content: req.body.content }
      ).then(function () {
        res.send("Successfully updated article");
      });
    } catch (err) {
      res.send(err);
    }
  })
  .patch(function (req, res) {
    try {
      Article.updateOne(
        { title: req.params.articleTitle },
        { $set: req.body }
      ).then(function () {
        res.send("Successfully updated article");
      });
    } catch (err) {
      res.send(err);
    }
  })
  .delete(function (req, res) {
    try {
      Article.deleteOne({ title: req.params.articleTitle }).then(function () {
        res.send("Successfully deleted article");
      });
    } catch (err) {
      res.send(err);
    }
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
