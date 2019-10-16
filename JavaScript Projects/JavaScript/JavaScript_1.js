function brewery_Function() {
    var brewery_Ouput;
    var breweries = document.getElementById("brewery_Input").value;
    var brewery_String= " makes great beer!";
    switch(breweries) {
        case "Bell's":
            brewery_Output = "Bell's" + brewery_String;
        break;
        case "Sierra Nevada":
            brewery_Output = "Sierra Nevada" + brewery_String;
        break;
        case "New Belgium":
            brewery_Output = "New Belgium" + brewery_String;
        break;
        case "Dogfish Head":
            brewery_Output = "Dogfish Head" + brewery_String;
        break;
        case "Great Lakes Brewing":
            brewery_Output = "Great Lakes Brewing" + brewery_String;
        break;
        default:
            brewery_Output = "Please enter a brewery exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = brewery_Output;
}

function changeFunction() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var d = document.getElementById("graphic");
var cntxt = d.getContext("2d");
cntxt.beginPath();
cntxt.arc(95,50,40,0,2*Math.PI);
cntxt.stroke();




var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//create gradient
var grd = ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0,"purple");
grd.addColorStop(1,"blue");
//fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,380,380);
