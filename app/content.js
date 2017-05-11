/* 
* @Author: wxx
* @Date:   2017-04-25 13:22:22
* @Last Modified time: 2017-05-11 11:15:35
*/

// module.exports = "It works from content.js112";
var oDiv = document.getElementById('app');
oDiv.children[0].innerHTML = "我是测试文字!!"
// console.log(oDiv.children[0]);

exports.sayHello = function (name) {
    console.log('Hello ' + name + '今天你进步了吗？？');
};
exports.sayBye = function (name) {
    console.log('Fighting~ ' + name);
}