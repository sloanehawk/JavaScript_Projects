function addFunction() {
    var add = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + add;
}

function subFunction() {
    var sub = 3-1;
    document.getElementById("math2").innerHTML = "5 - 2 = " +  sub;
}

function multFunction() {
    var mult = 3*8;
    document.getElementById("math3").innerHTML = "3 * 8 = " + mult;
}

function divFunction() {
    var div = 9/3;
    document.getElementById("math4").innerHTML = "9 / 3 = " + div;
}

function mathFunction() {
    var math = (3+7)*12/2-1;
    document.getElementById("math5").innerHTML = "3 plus 7, multiplied by 12, divided by 2 and subtracted by 1 equals " + math;
}

function remainderFunction() {
    var remainder = 13 % 4;
    document.getElementById("math6").innerHTML = " 13 divided by 4 has remainder " + remainder;
}

function negationFunction() {
    var x = 5;
    document.getElementById("math7").innerHTML = "the opposite of 5 is " + -x;
}

function incrementFunction() {
    var x = 3;
    x++;
    document.getElementById("math8").innerHTML = "3 plus 1 is " + x;
}

function decrementFunction() {
    var x = 3;
    x--;
    document.getElementById("math9").innerHTML = "3 minus 1 is " + x;
}

function randFunction() {
    var x = Math.random();
    document.getElementById("rand").innerHTML = x;
}

function roundFunction() {
    var x = Math.round(4.67)
    document.getElementById("round").innerHTML = "4.67 rounded is " + x;
}