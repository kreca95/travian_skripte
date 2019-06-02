var napad=$(".iReport3").closest("td").next("td").children();

// setTimeout(() => {
    
//     }
// }, 500);

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