function myDictionary() {
    var Pet = {
        Species: "Black Lab",
        Color: "Black",
        Name: "Sadie",
        Age: 13,
        Food: "Chicken"
    };
    delete Pet.Species;
    document.getElementById("Dictionary").innerHTML = Pet.Species;
}

function twoKeys() {
    var Dog = {
        Color: "Black",
        Color: "Brown",
        Name: "Bella",
    };
    document.getElementById("Dictionary2").innerHTML = Dog.Color;
}