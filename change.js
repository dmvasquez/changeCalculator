//Function for rounding to 2nd decimal place
function roundToDecimal(num,dec) {
      var rounded = (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec)).toFixed(dec);
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

	var changeAmount = totalAmountSale - amountTendered;
	if (isNaN(changeAmount)) {
		
		var output = document.getElementById('output');
		output.innerHTML = "<div>Please insert only numerical values into the box</div>";

	} else {
		var message = 'The total change owed is ' + roundToDecimal(changeAmount) + '';
		
		var output = document.getElementById('output');
		output.innerHTML = message;	
	}
	return false;
}
