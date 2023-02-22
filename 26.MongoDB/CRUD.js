const createMongo =
  //db.product.insertOne(
  {
    _id: 2,
    name: "Pencil",
    price: 0.8,
    stock: 12,
  };
//)

const readMongo =
  //db.product.find(
  {
    price: { $gt: 1 },
  };
//)

var updateMongo =
  //db.product.updateOne(
  { _id: 2 }; //, {$set: { price: 0.8} };
//)

const relationshipsMongo = {
  _id: 2,
  name: "Pencil",
  price: 0.8,
  stock: 12,
  //relationship
  reviews: [
    {
      authorName: "Alex",
      rating: 5,
      review: "Awesome!",
    },
    {
      authorName: "Osito",
      rating: 5,
      review: "Incredible!",
    },
  ],
};
