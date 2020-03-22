function myConvert() {
  var inputOne = document.getElementById('firstValue').value;
  var inputTwo = document.getElementById('secondValue').value;
  var selOne = document.getElementById('tempMenuOne').value;
  var selTwo = document.getElementById('tempMenuTwo').value;
  // var valueToConvert = document.getElementById('qty').innerHTML;
  // var convertedValue = document.getElementById('convert_qty').innerHTML;

  console.log(selOne);
  console.log(selTwo);
  console.log(inputOne);
  if (selTwo == 'celcius') {

    var valueToConvert = document.getElementById('qty').innerHTML = inputTwo + 'degree Celcius equals';
    if (selOne == 'celcius') {
      var z = document.getElementById('secondValue').value;
      console.log(z)
      
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + '' + 'degree Celcius';
      console.log(valueToConvert)
      console.log(convertedValue)
    }
    else if (selOne == 'fahrenheit') {
      var x = parseInt(inputTwo, 10)
      var y = x * 9 / 5;
      var z = y + 32;
      console.log(z)
     
    }
    else if (selOne == 'kelvin') {
      var x = parseInt(inputTwo, 10)
      var y = 273
      var z = x + y
      console.log(z)
    }
  } else if (selTwo == 'fahrenheit') {

    if (selOne == 'celcius') {
      var x = parseInt(inputTwo, 10)
      var y = (x - 32)
      var z = y * (5 / 9)
      console.log(y);
      console.log(z);
    }
    else if (selOne == 'fahrenheit') {
      var inputTwo = document.getElementById('secondValue').value;
      console.log(inputTwo)
    }
    else if (selOne == 'kelvin') {
      var x = parseInt(inputTwo, 10)
      var y = (x - 32) * (5 / 9)
      var z = y + 273
      console.log(y);
      console.log(z);
    }
  } else if (selTwo == 'kelvin') {

    if (selOne == 'celcius') {
      var x = parseInt(inputTwo, 10)
      var y = x - 273
      console.log(y)
    }
    else if (selOne == 'fahrenheit') {
      var x = parseInt(inputTwo, 10)
      var y = (x - 32) * (5 / 9)
      var z = y + 273
      console.log(z);
    }
    else if (selOne == 'kelvin') {
      var inputTwo = document.getElementById('secondValue').value;
      console.log(inputTwo)
    }
  }

}

function converter() {
  var inputOne = document.getElementById('firstValue').value;
  var inputTwo = document.getElementById('secondValue').value;
  var selOne = document.getElementById('tempMenuOne').value;
  var selTwo = document.getElementById('tempMenuTwo').value;

  console.log(selOne);
  console.log(selTwo);
  console.log(inputOne);

  if (selOne == 'celcius') {
    var valueToConvert = document.getElementById('qty').innerHTML = inputOne + " " + 'degree Celcius equals';

    if (selTwo == 'celcius') {
      var inputOne = document.getElementById('firstValue').value;
      var z = inputOne.toFixed(2);
      console.log(z)
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Celcius';
      var inputTwo = document.getElementById('secondValue').value = inputOne ;
    }
    else if (selTwo == 'fahrenheit') {
      var x = 18 / 10;
      var y = (x * inputOne) + 32;
      var z = y.toFixed(2);
      console.log(z)
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Fahrenheit';
      var inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (selTwo == 'kelvin') {
      var x = parseInt(inputOne, 10)
      var y = x + 273
      var z = y.toFixed(2);
      console.log(z)
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Kelvin';
      var inputTwo = document.getElementById('secondValue').value = z ;
    }
  } else if (selOne == 'fahrenheit') {

    var valueToConvert = document.getElementById('qty').innerHTML = inputOne + ' ' + 'degree Fahrenheit equals';
    if (selTwo == 'celcius') {
      var x = parseInt(inputOne, 10)
      var y = (x - 32) * (5 / 9)
      var z = y.toFixed(2)
      console.log(y);
      console.log(z);
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Celcius';
      var inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (selTwo == 'fahrenheit') {
      var inputOne = document.getElementById('firstValue').value;
      var z = inputOne.toFixed(2)
      console.log(z)
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Fahrenheit';
      var inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (selTwo == 'kelvin') {
      var x = parseInt(inputOne, 10) - 32
      var y = x* (5 / 9) + 273
      var z = y.toFixed(2)
      console.log(y);
      console.log(z);
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Kelvin';
      var inputTwo = document.getElementById('secondValue').value = z ;
    }
  } else if (selOne == 'kelvin') {

    var valueToConvert = document.getElementById('qty').innerHTML = inputOne + ' ' + 'degree Kelvin equals';
    if (selTwo == 'celcius') {
      var x = parseInt(inputOne, 10)
      var y = x - 273
      var z = y.toFixed(2)
      console.log(z)
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Celcius';
      var inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (selTwo == 'fahrenheit') {
      var x = parseInt(inputOne, 10)- 32
      var y = x * (5 / 9) + 273
      var z = y.toFixed(2)
      console.log(z);
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Fahrenheit';
      var inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (selTwo == 'kelvin'){
      var inputOne = document.getElementById('firstValue').value;
      var z = inputOne.toFixed(2);
      console.log(z)
      var convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Kelvin';
      var inputTwo = document.getElementById('secondValue').value = inputOne ;
    }
  }


}