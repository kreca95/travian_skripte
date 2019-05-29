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