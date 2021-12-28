alert(('b' + 'a' + +'a' + 'a').toLowerCase())

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
    let aValue = document.getElementById("number1").value;
    let bValue = document.getElementById("number2").value;

    let result = document.getElementById("result");
    try {
        let calc = new Calculator(parseInt(aValue), parseInt(bValue));
        let summa = calc.Sum();
        result.innerHTML = `sum = ${summa}`;
    } catch (error) {
        result.innerHTML = `an exeption occured '${error}'`;
    }
}

function onInputFocus(x) {
    x.style.background = "yellow";
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