var express = require('express');
var router = express.Router();
var User = require('../model/user.model');

/* GET home page. */
router.get('/', async (req, res, next) => {
  let users = await User.find();
  res.render('index', { page: 'home', users: users });
});

router.get('/delete/:id', (req, res) => {
  console.log(req.params.id)
  User.findOneAndRemove({ _id: req.params.id }, { useFindAndModify: false }, (err) => {
    if (err) {
      console.log(err.toString());
    } else {
      res.redirect('/')
    }
  })
});

module.exports = router;
