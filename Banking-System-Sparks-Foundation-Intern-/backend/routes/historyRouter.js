const express = require("express");
const router = express.Router();
const History = require("../models/historyModel");

router.get("/", (req, res) => {
  History.find()
    .then((history) => res.json(history))
    .catch((err) => res.json(err));
});

module.exports = router;
