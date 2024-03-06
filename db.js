const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/food-nutrition', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove useCreateIndex and useFindAndModify options
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
