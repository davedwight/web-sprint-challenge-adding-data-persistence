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

module.exports = router;
