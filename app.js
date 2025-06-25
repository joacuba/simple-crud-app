import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.get("/", (_, res) => {
  res.send("Hello from ConectaYA Node API Server Updated");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
