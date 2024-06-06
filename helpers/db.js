const mongoose = require("mongoose");
const dotEnv = require('dotenv');
dotEnv.config();

try {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then((res) => console.log(`MOngoDB connected Successfully..!`));
} catch (error) {
    console.log(`MongoDB Error: `, error.message);
    process.exit(1);
}

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/user"),
};