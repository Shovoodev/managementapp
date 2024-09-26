const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.massage });
  }
};
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.massage });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`no task has been found in id ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.massage });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`no task has been found in id ${id}`);
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).json({ msg: error.massage });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators:true
    });
    if (!task) {
        return res.status(404).json(`no task has been found in id ${id}`);
      }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.massage });
  }
};
module.exports = { createTask, getTasks, getTask, deleteTask, updateTask };
