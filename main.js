var inputs = []

function getParagraph1() {
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    input.join(". ");
    document.getElementById("showgetParagraph1").innerHTML = inputs.join("  ");

}

function getParagraph2() {

    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para2_input_box_" + i).value);
    }
    input.join(". ");
    document.getElementById("showgetParagraph1").innerHTML = inputs.join("  ");

}