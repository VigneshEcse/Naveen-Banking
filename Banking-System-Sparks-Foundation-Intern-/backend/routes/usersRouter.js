const express = require("express");
const router = express.Router();
const Users = require("../models/usersModel");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

router.post("/add", (req, res) => {
  const newUser = new Users({
    name: req.body.name,
    email: req.body.email,
    accountBalance: req.body.accountBalance,
  });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.json(err));
});


module.exports = router;
