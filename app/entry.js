/* 
* @Author: wxx
* @Date:   2017-04-24 16:33:35
* @Last Modified time: 2017-05-11 11:12:35
*/

var BootstrapCss = require("bootstrap/dist/css/bootstrap.min.css");
var styleCss = require("./style.css");
var cont = require("./content.js");
window.$ = require("jquery");

document.write("webpack study~");
cont.sayHello('xiao '); 
cont.sayBye('未完待续~');

$("#app").children('p').html("啦啦啦~");