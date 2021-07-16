const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.get();
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
