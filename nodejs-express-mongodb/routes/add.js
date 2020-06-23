var express = require('express');
var router = express.Router();
var multer  = require('multer');

var upload = multer({ dest: 'public/uploads/' });

var User = require('../model/user.model');


router.get('/', async (req, res, next) => {
  let users = await User.find();
  res.render('pages/add');
});


router.post('/', upload.single('avt'), (req, res) => {
    req.body.avt = req.file.path.split('/').splice(1, 3).join('/');
    console.log(req.body.avt);

    User.create(req.body);
    res.redirect('/');
});

module.exports = router;
