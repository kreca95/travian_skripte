
// ==UserScript==
// @name         popravak farm liste
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tx3.balkans.travian.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var napad=$(".iReport3").closest("td").next("td").children();

    for (let i = 0; i < napad.length; i++) {
        const element = napad[i];
        setTimeout(() => {
            element.click();
            if ($("#t10").val()!=691) {
                $("#t10").val(691);
                $("#save").click();
                $("#dialogCancelButton").click();
            }
        }, 1500*i);

    }
})();