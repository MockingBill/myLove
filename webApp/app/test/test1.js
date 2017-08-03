var fs =require('fs');
var events = require("events");
function readFileListen(data11){
    console.log('event read file listen had been happen '+data11);
}
rf=fs.createReadStream('test1.js');
//这里的data是固定的，指的是事件类型
rf.addListener('data',readFileListen);
