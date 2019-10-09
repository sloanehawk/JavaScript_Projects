function favThings() {
    var a = "Bears, ";
    var b = "beets, ";
    var c = "battlestar galactica.";
    var whole = a.concat(b,c);
    document.getElementById("concatenate").innerHTML = whole;
}

function sliceFunction() {
    var sentence = "Sadie is a good doggo.";
    var section = sentence.slice(0,5);
    document.getElementById("slice").innerHTML = section;
}

function upperFunction() {
    var str = "Sadie is a good doggo.";
    var upper_str=str.toUpperCase();
    document.getElementById("upper").innerHTML = upper_str;
}

function searchFunction() {
    var str ="The Tech Academy";
    var n = str.search("Tech")
    document.getElementById("search").innerHTML = n;
}

function stringFunction() {
    var num = 5;
    document.getElementById("to_String").innerHTML = num.toString();
}

function precisionFunction() {
    var a = 3.90288938493208409121;
    document.getElementById("precision").innerHTML = a.toPrecision(7);
}

function fixedFunction() {
    var b = 23432.24353242634;
    document.getElementById("to_Fixed").innerHTML = b.toFixed(2);
}

function valueOfFunction() {
    var c = 3;
    document.getElementById("value_Of").innerHTML = c.valueOf()
}