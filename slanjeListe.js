// ==UserScript==
// @name         Slanje farm liste
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tx3.balkans.travian.com/build.php?gid=16&tt=99
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...


var nasumican=Math.floor(Math.random() * 60000);
var periodSlanja=12000 + nasumican; //svako koliko ce se slati lista u milisekundama

setTimeout(() => {
    var liste = $(".markAll.check");
    var random = Math.floor((Math.random() * liste.length));
    liste[random].click()
    $("button:contains('Započeti pljačku')")[random].click();
}
,periodSlanja);

})();