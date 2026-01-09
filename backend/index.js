import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import useRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_UI;

// Daatabase connection
try {
  mongoose.connect(URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log(error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", useRoute);

app.get("/", (req, res) => {
  res.send("Hello from Server!");
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
