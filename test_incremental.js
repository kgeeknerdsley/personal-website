var money = 0;
var guests = 0;

//general function to increase money
function incrementMoney(incrementVal) {
    money += incrementVal;
    document.getElementById("moneyCount").innerHTML = money;
}

function incrementGuests(incrementVal) {
    guests += incrementVal;
    document.getElementById("guestCount").innerHTML = guests;
}

function hiddenClick() {
    
}

var button1 = document.getElementById("sneakyButton").style.display;
button1 = "none";

//game loop
window.setInterval(function() {
    incrementMoney(1);

    if(money >= 30) {
        button1 = "block";
    }
},1000);