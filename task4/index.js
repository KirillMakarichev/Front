alert(('b' + 'a' + +'a' + 'a').toLowerCase())
alert(Math.pow(5, 5000000) == Infinity);

class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;

        if (!this.IsValide())
            throw `you should put numbers`;
    }

    IsValide() {
        if (this.number1 === '' || this.number2 === '' ||
            !Number.isInteger(this.number1) || !Number.isInteger(this.number2)) {
            return false;
        }

        return true;
    }

    Sum() {
        return this.number1 + this.number2;
    }
}

function submitSum() {
    let aElement = document.getElementById("number1");
    onInputFocus(aElement, "green");
    let aValue = aElement.value;
    let bElement = document.getElementById("number2");
    onInputFocus(bElement, "green");
    let bValue = bElement.value;

    let result = document.getElementById("result");
    try {
        let calc = new Calculator(parseInt(aValue), parseInt(bValue));
        let summa = calc.Sum();
        result.innerHTML = `sum = ${summa}`;
    } catch (error) {
        result.innerHTML = `an exeption occured '${error}'`;
    }
}

function onInputFocus(x, errorColor) {
    var color = errorColor == undefined ? "yellow" : errorColor;
    x.style.background = color;
}

function inputBlur(x) {
    x.style.background = "";
}

function buttonMouseOver(x) {
    x.style.background = "red"
}

function buttonMouseOut(x) {
    x.style.background = ""
}