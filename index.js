const inputDollar = document.getElementById("input-dollar")
const inputDollarField = document.getElementById("input-dollar-field")
const inputPound = document.getElementById("input-pound")
const inputPoundField = document.getElementById("input-pound-field")

const outputPound = document.getElementById("output-pound")
const outputDollar = document.getElementById("output-dollar")

inputDollar.addEventListener("submit", event => {
    event.preventDefault();
    let dollarinput = inputDollarField.value;
    let poundconverted = (dollarinput * 0.79).toFixed(2);
    if (dollarinput >= 0) {
    outputPound.innerHTML = "$" + dollarinput + " = £" + poundconverted;
    }
    else {
    outputPound.innerHTML = "Please enter a positive integer"
    }
});

inputPound.addEventListener("submit", event => {
    event.preventDefault();
    let poundinput = inputPoundField.value;
    let dollarconverted = (poundinput * 1.21).toFixed(2);
    if (poundinput >= 0) {
    outputDollar.innerHTML = "£" + poundinput + " = $" + dollarconverted;
    }
    else {
    outputDollar.innerHTML = "Please enter a positive integer"
    }
});