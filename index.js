//Function for rounding to 2nd decimal place
function roundToDecimal(num, dec) {
    var rounded = (Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);
    return rounded;
}


//One input for total amount of sale
var form = document.getElementById('inputForm');


// One button to calculate change from sale and tendered amount
form.onsubmit = function () {
    var inputTotalAmountSale = document.getElementById('inputFormOne');
    var inputAmountTendered = document.getElementById('inputFormTwo');

    var totalAmountSale = inputTotalAmountSale.value;
    var amountTendered = inputAmountTendered.value;

    var changeAmount = amountTendered - totalAmountSale;

    var fiftyAmount = parseInt(changeAmount / 50);
    var fiftyRemainderAmount = changeAmount % 50;
    var twentyAmount = parseInt(fiftyRemainderAmount / 20);
    var twentyRemainderAmount = fiftyRemainderAmount % 20;
    var tenAmount = parseInt(twentyRemainderAmount / 10);
    var tenRemainderAmount = twentyRemainderAmount % 10;
    var fiveAmount = parseInt(tenRemainderAmount / 5);
    var fiveRemainderAmount = tenRemainderAmount % 5;
    var dollarAmount = parseInt(fiveRemainderAmount / 1);
    var dollarRemainderAmount = fiveRemainderAmount % 1;
    var quarterAmount = parseInt(dollarRemainderAmount / 0.25);
    var quarterRemainderAmount = ((Math.round(dollarRemainderAmount * 100) % 25) / 100);
    var dimeAmount = parseInt(quarterRemainderAmount / 0.10);
    var dimeRemainderAmount = ((Math.round(quarterRemainderAmount * 100) % 10) / 100);
    var nickelAmount = parseInt(dimeRemainderAmount / 0.05);
    var nickelRemainderAmount = ((Math.round(dimeRemainderAmount * 100) % 5) / 100);
    var pennyAmount = Math.round(nickelRemainderAmount / 0.01);

    console.log(quarterRemainderAmount);

    if (isNaN(changeAmount)) {

        var output = document.getElementById('output');
        output.innerHTML = "<div>Please insert only numerical values into the box</div>";

    } else {
        var message = 'The total change owed is $' + roundToDecimal(changeAmount, 2);
        var fiftyMessage = fiftyAmount + ' Fifties';
        var twentyMessage = twentyAmount + ' Twenties';
        var tenMessage = tenAmount + ' Tens';
        var fiveMessage = fiveAmount + ' Fives';
        var dollarsMessage = dollarAmount + ' Dollars';
        var quarterMessage = quarterAmount + ' Quarters';
        var dimeMessage = dimeAmount + ' Dimes';
        var nickelMessage = nickelAmount + ' Nickels';
        var pennyMessage = pennyAmount + ' Pennies';

        var output = document.getElementById('output');
        output.innerHTML = message;

        var fifty = document.getElementById('fifty');
        fifty.innerHTML = fiftyMessage;

        var twenty = document.getElementById('twenty');
        twenty.innerHTML = twentyMessage;

        var tens = document.getElementById('tens');
        tens.innerHTML = tenMessage;

        var fives = document.getElementById('fives');
        fives.innerHTML = fiveMessage;

        var dollar = document.getElementById('dollar');
        dollar.innerHTML = dollarsMessage;

        var quarter = document.getElementById('quarter');
        quarter.innerHTML = quarterMessage;

        var dime = document.getElementById('dime');
        dime.innerHTML = dimeMessage;

        var nickel = document.getElementById('nickel');
        nickel.innerHTML = nickelMessage;

        var penny = document.getElementById('penny');
        penny.innerHTML = pennyMessage;
    }
    return false;
}
