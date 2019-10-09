function rideFunction() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52)?"You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride."
}

function voteFunction() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18)? "You are not old enough to vote":"You can vote!";
    document.getElementById("vote").innerHTML = can_vote
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " +Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Pet(Species, Name, Color) {
    this.Pet_Species = Species;
    this.Pet_Name = Name;
    this.Pet_Color = Color;
}

var Sadie = new Pet("dog", "Sadie", "black");
function petFunction() {
    document.getElementById("New_and_This").innerHTML =
    "My pet is a " + Sadie.Pet_Color +" "+ Sadie.Pet_Species + " named " + Sadie.Pet_Name;
}

function mathFunction() {
    document.getElementById("Nested_Function").innerHTML = multFunction();
    function multFunction() {
        var num = 4;
        function timesTwo() {num=num*2;}
        timesTwo();
        return num;
    }
}
