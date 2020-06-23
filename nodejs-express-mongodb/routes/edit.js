var express = require("express");
var router = express.Router();

var User = require("../model/user.model");

router.get("/:id", async (req, res, next) => {
  let user = await User.findOne({ _id: req.params.id });
  res.render("pages/edit", { user });
});

router.post("/:id", async (req, res) => {
  await User.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, email: req.body.email },
    (err) => {
        if (err) {
            console.log(err.toString());
        } else {
            res.redirect('/');
        }
    }
  );
});

module.exports = router;
