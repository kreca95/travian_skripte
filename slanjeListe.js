// ==UserScript==
// @name         Slanje farm liste
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tx3.travian.com.my/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    if(document.URL.indexOf("tt=99")>-1 && document.URL.toString()!="https://tx3.travian.com.my/build.php?tt=99&id=39")
       {
        window.location.replace("https://tx3.travian.com.my/build.php?tt=99&id=39");
    }
    var napad=$(".iReport3").closest("td").next("td").children();

    for (let i = 0; i < napad.length; i++) {
        const element = napad[i];
        setTimeout(() => {
            element.click();
            if ($("#t10").val()!=691) {
                $("#t10").val(691);
                $("#save").click();
                $(".overlay").click();
                setTimeout(() => {
                    $(".overlay").click();
                }, 500);

            }
            else{
                $(".overlay").click()
            }

        }, 1500*i);

    }
var nasumican=Math.floor(Math.random() * 60000);
var periodSlanja=6000 + nasumican;
var dateObj = new Date(Date.now() + periodSlanja);
document.getElementById("content").append(dateObj);
    var liste = $(".markAll.check");
    var random = Math.floor((Math.random() * liste.length));
    liste[random].click()
setTimeout(() => {

    $("button:contains('Započeti pljačku')")[random].click();
}
,periodSlanja);

})();