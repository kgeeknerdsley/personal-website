var money = 0;


//button click to make money
function incrementMoney(incrementVal) {
    money += incrementVal;
    document.getElementById("moneyCount").innerHTML = money;
}

//game loop
window.setInterval(function() {
    incrementMoney(1);
},1000);