
document.write(typeof 3)


function nanFunction() {
    document.getElementById("nan").innerHTML = 0/0
}

function isnan_true() {
    document.getElementById("true").innerHTML = isNaN(3);
}

function isnan_false() {
    document.getElementById("false").innerHTML = isNaN('string');
}

function infFunction() {
    document.getElementById("inf").innerHTML = 3E310;
}

function neginfFunction() {
    document.getElementById("neginf").innerHTML = -3E310;
}

document.write(6>3);
document.write(6<3);

console.log(2+2);

document.write("1"+7);

console.log(2>7);

document.write(1==1);
document.write(1==2);

x = 5;
y = 5;
document.write(x===y);

a="five";
b=6;
document.write(a===b);

c="five";
d=5;
document.write(b===c);

e=6;
f=7;
document.write(e===f);

document.write(2>1 && 3>1);
document.write(2>1 && 1>3);

document.write(2>1 || 1>3);
document.write(2>3 || 1>3);

function notFunction() {
    document.getElementById("not").innerHTML=!(2>3);
}

function notFunction2() {
    document.getElementById("not2").innerHTML=!(2>1);
}