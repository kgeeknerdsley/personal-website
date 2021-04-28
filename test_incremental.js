var money = 0;

function incrementMoney(incrementVal) {
    money += incrementVal;
    document.getElementById("moneyCount").innerHTML = money;
}