const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoutes");
const cors = require('cors')
//nPX7JRDV50VUOaVi
const app = express();

//middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use("/api/tasks",taskRoutes);
//routes
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`server running in port ${PORT}`);
    });
  } catch (error) {}
};
startServer();
