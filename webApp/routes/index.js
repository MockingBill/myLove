var express = require('express');
var router = express.Router();
var multer=require('multer');



/**
 * 路由路径
 */
router.post('/upload',function (req,res,next) {
    console.log(req.body);
    console.log('www');
    req.flash('success', '文件上传成功!');
    res.redirect('/index');

});


router.get('/',function (req,res,next) {
    res.render('index');
});



module.exports = router;
