
//----- hacking the scrolling -------------------------------


var refresh = setInterval(function () {
document.getElementById('see_older')
.getElementsByClassName('content')[0].click();
}, 500);

//--------------- the real shit ------------------------------

var dropYoutubeLinks = function(

var messages = document.getElementsByClassName('msg');
var youtubeLinks = new Array();
var regex = /(?:https?:\/\/|www\.|m\.|^)youtu(?:be\.com\/watch\?(?:.*?&(?:amp;)?)?v=|\.be\/)([\w‌​\-]+)(?:&(?:amp;)?[\w\?=]*)?/ig;

var spanElements;

for(var i = 0; i < messages.length; i++){
  //html collection
  spanElements = messages[i].getElementsByTagName('span');

  for(var j = 0; j < spanElements.length; j++){
    var hasLink = spanElements[j].getElementsByTagName('a');

    if(!hasLink || hasLink[0] === undefined){
      continue;
    } else {

      if(hasLink[0].dataset.store !== undefined){
        var url;
        // var url = JSON.parse(elements[i].getElementsByTagName('a')[0].dataset.store).dest_uri || "gog";
        url = JSON.parse(hasLink[0].dataset.store).dest_uri;

        if(url !== undefined && url.toString().match(regex)){

          var title = messages[i].getElementsByClassName('_52jd _52jh _4o51 _hm6')[0];
          if(title === undefined){
            title = "No name";
          } else {
            title = title.innerHTML.toString();
          }

          var songObj = {
            title: title,
            link: url
          }

          youtubeLinks.push(songObj);
        }

      }
    }
  }
}
console.log(youtubeLinks);

);

// -------------------------------------------------------------

clearInterval(refresh);
