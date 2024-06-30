import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Routes/book.route.js";
import userRoute from "./Routes/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
// const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to mongodb

try {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to databse");
} catch (error) {
  console.log(error);
}

//defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
