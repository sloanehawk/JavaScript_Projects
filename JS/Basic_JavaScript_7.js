x = 10;

function addFunction() {
    var y=10;
    document.write(x+y+"<br>");
}

function subFunction() {
    document.write(x-y+"<br>");
}

addFunction();
subFunction();

function noonFunction() {
    if (new Date().getHours() > 12) {
        document.getElementById("time").innerHTML = "It is after noon.";
    }
}

function voteFunction() {
    var age = 17;
    if (age<18) {
        document.getElementById("age").innerHTML = age + " is too young to vote.";
    }

}

function ageFunction() {
    age2 = document.getElementById("age2").value;
    if (age2>=21) {
        canDrink = "You are old enough to drink in the U.S.!";
    }
    else {
        canDrink = "You are too young to drink in the U.S., try Canada.";
    }
    document.getElementById("drink").innerHTML = canDrink;
}

function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time<12 == time>0) {
        reply = "Good morning!";
    }
    else if (time>12==time<18) {
        reply = "Good afternoon!";
    }
    else {
        reply = "Good evening!";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}