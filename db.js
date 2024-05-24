const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/"
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongoose successfully");
  })
}
module.exports = connectToMongo;
