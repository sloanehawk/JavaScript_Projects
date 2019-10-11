function countDown() {
    var num = "";
    var x = 10;
    while (x > 0) {
        num += "<br>" + x;
        x--;
    }
    document.getElementById("Loop").innerHTML = num;
}

function stringLength() {
    var str = "Roses are red";
    var a = str.length;
    document.getElementById("length").innerHTML = a;
}

var Food = ["Bagel", "Pizza", "Chicken", "Ice cream", "Pasta"];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0; Y < Food.length; Y++) {
        Content += Food[Y]+"<br>";
    }
    document.getElementById("List_of_Food").innerHTML = Content;
}

function arrayFunction() {
    var Beer = ["New Belgium", "Sierra Nevada", "Bells"];
    document.getElementById("Array").innerHTML = "My favorite brewery is " + Beer[2];
}

function constant_function() {
    const Beer = {brewery:"Bell's", name:"Two Hearted Ale", style:"IPA"};
    Beer.name = "Hopslam Ale";
    Beer.ABV = "10%";
    document.getElementById("Constant").innerHTML = Beer.name + " is a " +
    Beer.brewery + " " + Beer.style + " with ABV of " + Beer.ABV;
}

document.write("<br>");
var b = 34;
document.write(b);
{
    let b = 420;
    document.write("<br>" + b)
}
document.write("<br>" + b);

function timesTwo(num) {
    return num*2;
}

document.getElementById("mult").innerHTML = timesTwo(2);

let dog = {
    name: "Bella",
    breed: "pit bull",
    color: "brindle",
    age: 6,
    description: function() {
        return this.name + " is a " + this.age + 
        " year old " + this.color + " " + this.breed;
    }
}
document.getElementById("dog_Object").innerHTML = dog.description();

var text="";
var i;
for (i=10;i<20;i++) {
    if (i===13) {break;}
    text += i +"<br>";
}
document.getElementById("break").innerHTML = text;

for (i=10; i<20; i++) {
    if (i ===13) {continue;}
    text += i + "<br>";
}
document.getElementById("continue").innerHTML = text;
