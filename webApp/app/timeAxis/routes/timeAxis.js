var express = require('express');
var router = express.Router();
router.route('/').get(function (req,res,next) {
    res.render('timeAxis/mainTimeAxis.hbs',{username:"illidan"});
});

module.exports = router;