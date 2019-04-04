// ==UserScript==
// @name         oznaci_reportove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tx3.balkans.travian.com/berichte.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
const limit =500;

var reports=$(".reportInfo");

for (let i = 0; i < reports.length; i++) {
    const element = reports[i];
    // console.log(element.alt.split("/")[0]);
    if (element.alt.split("/")[0] > limit) {
        element.style.backgroundColor  = "red";
    }
}

})();