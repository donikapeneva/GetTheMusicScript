// var fs = require('fs');
//
// var musicMap = new Array();
//
// fs.readFile('chronology.txt', function(err, data){
//   if(err){
//     return console.error(err);
//   }
//
//   var regex = /(?:https?:\/\/|www\.|m\.|^)youtu(?:be\.com\/watch\?(?:.*?&(?:amp;)?)?v=|\.be\/)([\w‌​\-]+)(?:&(?:amp;)?[\w\?=]*)?/ig;
//
//   var res = data.toString().match(regex);
//
//   console.log(res);
// });

var fs = require('fs');
var http = require('http');


fs.readFile('./messages.htm', function(err, data){
  var content = data.toString();
  // console.log('Default(utf8) : ' + content.toString());
  var json = cutFile(content);

  console.log(json);
});

function cutFile(content){
  console.log(content.length);
  console.log(content.search('Donika Peneva, Ivo Raykov'));

  // var startIndex = content.search('Ivo Raykov') -1;

  // var cutted = content.substring(startIndex, content.length);

  // console.log(cutted.length);


    var startIndex = content.search('Donika Peneva') -1;

    var cutted = content.substring(startIndex, startIndex + 500);

    console.log(cutted);

}
