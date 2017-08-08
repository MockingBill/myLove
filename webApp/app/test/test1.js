var mongoose = require("mongoose");
var Schema = mongoose.Schema;


/*  连接数据库*/
var db = mongoose.connect("mongodb://127.0.0.1:27017/webApp");

/**
 * 设置默认日期
 * @type {Date}
 */
var myDate = new Date();
/**
 * 时间轴数据结构
 * @type {mongoose.Schema}
 */
var timeAxisSchema = new Schema({
        month_year_data: String,
        week_day: [{
                week_day_data: String,
                event_heard: String,
                event_body: [{
                        event_txt: String,
                        event_image: String
                    }]


            }],

        modify_date: {type: String, default: myDate.toLocaleDateString()},
        is_effect: {type:Boolean, default:true}
    },
    {collection: "front_timeAxis"}//mongodb集合名
);
var TestModel = db.model("test", timeAxisSchema); //'test'相当于collection


var TestEntity = new TestModel({
    month_year_data: 'May 2016',
    week_day: [{
            week_day_data: 'Feb 03',
            event_heard:'Event Heading',
                event_body: [{
                    event_txt:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n' +
                    'veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n' +
                    'esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
                    'cupidatat\nnon proident, sunt in culpa qui officia deserunt mollit anim id est\nlaborum.',
                    event_image:'../../public/images/timeAxis/dog01.png'
                },{
                    event_txt:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n' +
                    'veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n' +
                    'esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
                    'cupidatat\nnon proident, sunt in culpa qui officia deserunt mollit anim id est\nlaborum.',
                    event_image:'../../public/images/timeAxis/dog02.png'
                },{
                    event_txt:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n' +
                    'veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n' +
                    'esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
                    'cupidatat\nnon proident, sunt in culpa qui officia deserunt mollit anim id est\nlaborum.',
                    event_image:'../../public/images/timeAxis/dog03.png'
                }]


        },{
            week_day_data: 'Sat 04',
                event_heard:'Event Handing',
                event_body: [{
                    event_txt:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n' +
                    'veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n' +
                    'esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
                    'cupidatat\nnon proident, sunt in culpa qui officia deserunt mollit anim id est\nlaborum.',
                    event_image:'../../public/images/timeAxis/cat02.png'
                },{
                    event_txt:' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n' +
                    'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n' +
                    'veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
                    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n' +
                    'esse\ncillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
                    'cupidatat\nnon proident, sunt in culpa qui officia deserunt mollit anim id est\nlaborum.',
                    event_image:'../../public/images/timeAxis/cat03.png'
                }]
            }]
        });
TestEntity.save(function (err, doc) {
    if (err) {
        console.log("error :" + err);
    } else {
        console.log(doc);
    }
});
