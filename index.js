require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const { env } = require("process");
const app = express();
app.use(express.json());
const categoryRoutes = require("./routes/category/index");
const wallpapersRoutes = require("./routes/wallpapers/index");

app.use("/api/categories", categoryRoutes);
app.use("/api/wallpapers", wallpapersRoutes);

const port = process.env.PORT;

// app.use("/", (req, res) => {
//   res.status(200).send("sucessfull!");
// });
connectDB()
  .then(() => {
    console.log("Database connection established.....");

    app.listen(port, () => {
      console.log(`server-wallhub started at port ${port}`);
    });
  })
  .catch((err) => {
    console.log("connection cannot be established!!!");
  });
