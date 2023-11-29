//mongodb+srv://<username>:<password>@chatai.ixzytik.mongodb.net/
const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
console.log('username', username, 'password', password);
const connectString = `mongodb+srv://${username}:${password}@chat-ai.lbxoocx.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(connectString);
    console.log(`MongoDB connected ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnect;
