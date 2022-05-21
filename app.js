const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopdh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

// create schema

const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "why no name?"],
  },
  rating: {
    type: Number,
    max: 10,
    min: 1,
  },
  review: String,
});

const personSchema = mongoose.Schema({
  name: String,
  address: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

// create model

const Fruit = mongoose.model("fruits", fruitSchema);

const katal = new Fruit({
  name: "kola",
  rating: 10,
  review: "nice",
});
const mango = new Fruit({
  name: "mango",
  rating: 10,
  review: "awsome",
});

// Fruit.insertMany([katal, mango], (err) => {
//   if (!err) {
//     console.log("data insertion successfull");
//   } else {
//     console.log("data insertion failed");
//   }
// });
// Fruit.deleteOne({ _id: "6288e061f9a0dc2d7a843541" }, (err) => {
//   if (!err) {
//     console.log("delete successfullt");
//   }
// });

Fruit.updateOne(
  { _id: "6288f788d43d7cb3bc330788" },
  { name: "lichu" },
  (err) => {
    if (!err) {
      console.log("updated successfully");
    }
  }
);
