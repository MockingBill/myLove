var express = require('express');
var router = express.Router();
router.route('/').get(function (req,res,next) {
    res.render('userInfo/user',{username:"illidan"});
});

module.exports = router;