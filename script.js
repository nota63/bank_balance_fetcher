function updateBalance() {
    var balanceInput = document.getElementById("balance").value;
    var balanceDisplay = document.getElementById("balance-display");
    var formattedBalance = parseFloat(balanceInput).toFixed(2);

    if (isNaN(formattedBalance)) {
        alert("Please enter a valid number.");
    } else {
        var dateTimeDisplay = document.getElementById("date-time");
        var dateTime = new Date().toLocaleString();
        dateTimeDisplay.textContent = "Last updated: " + dateTime;

        balanceDisplay.textContent = "Your bank balance is: $" + formattedBalance;
        animateBalance();
    }
}

function animateBalance() {
    var balanceDisplay = document.getElementById("balance-display");
    balanceDisplay.style.color = "blue";
    setTimeout(function() {
        balanceDisplay.style.color = "black";
    }, 1000);
}

function clearBalance() {
    var balanceDisplay = document.getElementById("balance-display");
    var dateTimeDisplay = document.getElementById("date-time");
    balanceDisplay.textContent = "";
    dateTimeDisplay.textContent = "";
}

function resetApp() {
    var balanceInput = document.getElementById("balance");
    var balanceDisplay = document.getElementById("balance-display");
    var dateTimeDisplay = document.getElementById("date-time");
    balanceInput.value = "";
    balanceDisplay.textContent = "";
    dateTimeDisplay.textContent = "";
}
