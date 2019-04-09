// ==UserScript==
// @name         Slanje farm liste
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tx3.balkans.travian.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if(document.URL.indexOf("tt=99")>-1 && document.URL.toString()!="https://tx3.balkans.travian.com/build.php?tt=99&id=39")
       {
        window.location.replace("https://tx3.balkans.travian.com/build.php?tt=99&id=39");
    }

var nasumican=Math.floor(Math.random() * 60000);
var periodSlanja=120000 + nasumican;
var dateObj = new Date(Date.now() + periodSlanja);
document.getElementById("content").append(dateObj);

setTimeout(() => {
    var liste = $(".markAll.check");
    var random = Math.floor((Math.random() * liste.length));
    liste[random].click()
    $("button:contains('Započeti pljačku')")[random].click();
}
,periodSlanja);

})();