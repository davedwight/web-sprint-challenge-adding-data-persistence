const express = require("express");
const Project = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.get();
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = await Project.insert(req.body);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
