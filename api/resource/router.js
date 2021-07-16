const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.get();
    res.status(200).json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await Resource.insert(req.body);
    res.status(200).json(resource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
