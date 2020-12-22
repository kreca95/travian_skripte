// ==UserScript==
// @name         Slanje farm liste 2021
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tx3.balkans.travian.com/*
// @grant        none
// ==/UserScript==


console.log("pocetak");

if (document.URL.indexOf("tt=99") > -1) {
    Init();
}
else{
    console.log("replace");
}

function Init() {
    'use strict';
    var minTime = 1600;
    var maxTime = 5000;
    var actualTime = Math.floor(Math.random() * maxTime) + minTime;
    var htmlItem = $(".expandCollapse");
    var listLength = htmlItem.length;
    var listNumber = Math.floor(Math.random() * listLength);
    setTimeout(() => {
        htmlItem[listNumber].click();
        console.log("klikanje liste");

    }, 1000);

    setTimeout(() => {
        $(".markAll.check")[listNumber].click();
        console.log("klikanje checkboxa");
    }, actualTime);

    setTimeout(() => {
        $('button[type="button"][value="Početak"]')[listNumber].click();
        console.log("SLANJE");
        location.reload();
    }, actualTime + 1000);

}
