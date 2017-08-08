var express = require('express');
var service=require('../services/user_service');
var router = express.Router();
var unite=require('../../wb_unite/app_unites');

router.route('/').get(function (req,res,next) {
   delete req.session.user;
        res.render("admin/login");

});

router.route('/').post(function (req,res,next) {
var username=req.body.username;
var password=req.body.password;
if(username===null||username===undefined||username===''||password===null||password===undefined||password==='') {
    unite.respPage(res, '/login');
}
    service.judgeUser(username,password,req,function(result) {
        unite.respPage(res,result);
    });

});
module.exports = router;