const Task = require("../models/taskModel");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error getting tasks" });
  }
};

const createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      completed: false,
    });

    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        completed: req.body.completed,
      },
      { new: true }
    );

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
