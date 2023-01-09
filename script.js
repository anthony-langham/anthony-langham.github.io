'use strict';

// create an array of css themes
const themes = [];
themes[0] = 'css/themes/green-white.css';
themes[1] = 'css/themes/grey-white.css';
themes[2] = 'css/themes/indigo-white.css';
themes[3] = 'css/themes/red-white.css';
themes[4] = 'css/themes/white-blue.css';
themes[5] = 'css/themes/white-grey.css';
themes[6] = 'css/themes/white-indigo.css';
themes[7] = 'css/themes/white-red.css';
themes[8] = 'css/themes/yellow-black.css';
themes[9] = 'css/themes/orange-white.css';
themes[10] = 'css/themes/yellow-blue.css';
themes[11] = 'css/themes/yellow-white.css';
themes[12] = 'css/themes/white-orange.css';

//stack overflow example function

// $(function() {
//     var style = link[Math.floor(Math.random() * link.length )];
//     if (document.createStyleSheet){
//         document.createStyleSheet(style);
//     }else{
//         $('<link />',{
//             rel :'stylesheet',
//             type:'text/css',
//             href: style
//         }).appendTo('head');
//     }
// });

// This is a JQuery function, needed to import JQuery in the html file - review this **

$(function () {
  let style = themes[Math.floor(Math.random() * themes.length)];
  $('<link />', {
    rel: 'stylesheet',
    // type: 'text/css',
    href: style,
  }).appendTo('head');
});

document.querySelector(`.refresh`).addEventListener(`click`, function () {
  location.reload();
});