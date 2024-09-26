const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./model/taskModel");
//nPX7JRDV50VUOaVi
const app = express();


//middlewear
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/api/tasks" ,  async (req , res )=>{
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.massage})
    }
})

app.get("/api/tasks", async (req, res)=>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg: error.massage})
    }
})


const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`server running in port ${PORT}`);
    });
  } catch (error) {}
};
startServer()