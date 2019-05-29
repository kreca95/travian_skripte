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
if (window.location.href.indexOf("id=31")>-1) {
    var merchants = $(".send_res tbody tr .max a");
$(".carry").append("<br><a class='slanje'>00 SIROTILJA</a>"); $(".carry").append("<br><a class='slanje'>01 O SU</a>"); $(".carry").append("<br><a class='slanje'>02 NA</a>");



const clickMerch = (merch, clicks) => {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < clicks; j++) {
            merch[j].click();
        }
    }
}
//checks for wheat minus
if ($(".alert").length > 0) {
    clickMerch(merchants, 3);
}
else {
    clickMerch(merchants, 4);
}

$(".slanje").click((e) => {
    // console.log(e.target.innerText);
    $("#enterVillageName").val(e.target.innerText);

    $("#enabledButton").click();
    setTimeout(() => {
        $("#enabledButton").click();
    }, 1000);
    


})
}

})();