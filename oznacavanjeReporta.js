var reports=$(".reportInfo");

for (let i = 0; i < reports.length; i++) {
    const element = reports[i];
    // console.log(element.alt.split("/")[0]);
    if (element.alt.split("/")[0] > 500) {
        element.style.backgroundColor  = "red";
    }
}