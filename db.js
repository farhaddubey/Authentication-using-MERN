const mongoose = require("mongoose");
const mongoURI = ""
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongoose successfully");
  })
}
module.exports = connectToMongo;
