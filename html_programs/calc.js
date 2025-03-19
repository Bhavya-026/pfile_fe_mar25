var expression = "";

function calc(ch) {
    let box = document.getElementById("box").value;

    if (ch >= '0' && ch <= '9') {
        expression += ch;
        document.getElementById("box").value = expression;
    } else if (ch === '=') {
        try {
            let res = eval(expression);
            document.getElementById("box").value = expression + "=" + res;
            expression = "";
        } catch (error) {
            document.getElementById("box").value = "Error";
            expression = "";
        }
    } else if (ch === 'C') {
        expression = "";
        document.getElementById("box").value = "";
    } else { // + - * /
        if (expression !== "" && !isNaN(expression[expression.length - 1])) {
            expression += ch;
            document.getElementById("box").value = expression;
        }
    }
}