const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

//------------Adding One Person------------
/*
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Alex",
  age: 22,
});
person.save().then(() => console.log("Done!!!!!"));
*/

//------------Adding Many Fruits------------
/*
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Good!",
});

const orange = new Fruit({
  name: "Banana",
  score: 3,
  review: "It's ok",
});

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "It's amazing",
});

Fruit.insertMany([kiwi, orange], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Saved many fruits");
  }
});

*/

//------------Validation Schema------------
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

//------------Adding One Fruit------------

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Grape",
  rating: 10,
  review: "Good!",
});

//fruit.save().then(() => console.log("Done!!!!!"));

//------------Reading Fruits Name------------
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log(fruits);
    // fruits.forEach(function (fruit) {
    //   console.log(fruit.name);
    // });
  }
});

//------------Updating One Fruit Name------------
/*
Fruit.updateOne(
  { _id: "63fc36d639bdf0fd4d55181e" },
  { name: "Peach" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated");
    }
  }
);
*/

//------------Deleting One Fruit------------
/*
Fruit.deleteOne({ _id: "63fc36d2d6f5335d57a87e39" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted");
  }
});
*/

//------------Deleting Many People by Name------------
/*
Person.deleteMany({ name: "Alex" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted Alex");
  }
});
*/

//------------Adding Person with Relationships------------
/*
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit",
});

//pineapple.save().then(() => console.log("Done!!!!!"));

const person = new Person({
  name: "Angela",
  age: 51,
  favouriteFruit: pineapple,
});
person.save().then(() => console.log("Done!!!!!"));
*/

//------------Updating Person with Relationships------------
/*
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  rating: 8,
  review: "Too sweet",
});

mango.save().then(() => console.log("Done!!!!!"));

Person.updateOne({ name: "Alex" }, { favouriteFruit: mango }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Updated favouriteFruit Alex");
  }
});
*/
