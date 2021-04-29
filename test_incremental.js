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

//game loop
window.setInterval(function() {
    incrementMoney(1);
},1000);