var money = 0;
var guests = 0;

document.getElementById("sneakyButtonDiv").style.display = "none";

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
    window.alert("You found me!");
}

//game loop
window.setInterval(function() {
    incrementMoney(1);

    if(money >= 30) {
        document.getElementById("sneakyButtonDiv").style.display = "block";
    }
},1000);