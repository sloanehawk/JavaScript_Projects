function getReceipt() {
    var text1="<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize ==="Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "American Size Pizza") {
        sizeTotal = 18;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+"=$"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    console.log("meat count:" + meatCount);
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    var veggieTotal = 0;
    var selectedVeggies = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var k = 0; k < veggieArray.length; k++) {
        if (veggieArray[k].checked) {
            selectedVeggies.push(veggieArray[k].value);
            console.log("selected veggie item: ("+veggieArray[k].value+")");
            text1 = text1+veggieArray[k].value+"<br>";
        }
    }
    //first two veggie toppings are free
    var veggieCount = selectedVeggies.length;
    console.log('veggie count:'+veggieCount);
    if (veggieCount > 2) {
        veggieTotal = (veggieCount - 2);
    } else {
        veggieTotal = 0;
    }

    runningTotal = runningTotal + meatTotal+veggieTotal;
    console.log("running total:" +runningTotal);
    console.log("total selected meat and veggie items: "+meatCount+veggieCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+veggieTotal+".00");
    console.log("PurchaseTotal: "+"$"+runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"
    +runningTotal+".00"+"</strong></h3>";

};

