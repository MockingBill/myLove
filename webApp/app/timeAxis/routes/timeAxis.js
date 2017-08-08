var express = require('express');
var service=require('../services/timeAxis_service');
var router = express.Router();
router.route('/').get(function (req,res,next) {
    service.getAllTimeAxis(req,res,next);
});

module.exports = router;