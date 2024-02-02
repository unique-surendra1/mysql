import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGODB_URL;

const connectDB = async () => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected successfully !");
    })
    .catch((err) => {
      console.log(err, "Error");
    });
};

export default connectDB;
