function insert(num) {
    let currentDisplay = document.form.textview.value;
    if (currentDisplay === "0" || currentDisplay === "Error") {
        if (num !== "C" && num !== "DEL" && num !== "=") {
            document.form.textview.value = "";
            document.form.textview.value = document.form.textview.value + num;
        }
        if (num === ".") {
            document.form.textview.value = "0";
            document.form.textview.value = document.form.textview.value + num;
        }
    } else {
        if (num !== "C" && num !== "DEL" && num !== "=") {
            document.form.textview.value = document.form.textview.value + num;
        }
    }
}

function equal() {
    var exp = document.form.textview.value;
    try {
        if (exp) {
            document.form.textview.value = eval(exp);
        }
    } catch {
        document.form.textview.value = "Error";
    }
}

function claer() {
    document.form.textview.value = "0";
}

function backspace() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
    if (document.form.textview.value === "") {
        document.form.textview.value = "0";
    }
}