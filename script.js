let x = 'celcius';
let initialUnit = x;
let  finalUnit = x ;


const myConvert = (option) => {
 
  initialUnit = option.value;
  let inputOne = document.getElementById('firstValue').value;
  let inputTwo = document.getElementById('secondValue').value;
  // let valueToConvert = document.getElementById('qty').innerHTML;
  // let convertedValue = document.getElementById('convert_qty').innerHTML;
  emptyInputError();

  //if 2nd select is celcius

  if (finalUnit === 'celcius' && inputOne !== '') {
  //   let valueToConvert = document.getElementById('qty').innerHTML = inputTwo + ' ' + 'degree Celcius equals';
    if (initialUnit === 'celcius') {
      let z = inputTwo;
      console.log(z)
      inputOne = document.getElementById('firstValue').value = z;
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Celcius';
    }
    else if (initialUnit === 'fahrenheit') {
      let x = parseInt(inputTwo, 10)
      let y = x * 9 / 5;
      let z = y + 32;
      console.log(z)
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
    else if (initialUnit === 'kelvin') {
      let x = parseInt(inputTwo, 10)
      let y = 273
      let z = x + y
      console.log(z)
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
  } 
  
  //if 2nd select is fahrenheit 

  else if (finalUnit === 'fahrenheit') {
   if (initialUnit === 'celcius') {
      let x = parseInt(inputTwo, 10)
      let y = (x - 32)
      let z = y * (5 / 9)
      console.log(z);
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
    else if (initialUnit === 'fahrenheit') {
      let z = document.getElementById('secondValue').value;
      console.log(z)
      inputOne = document.getElementById('firstValue').value =z;
    }
    else if (initialUnit === 'kelvin') {
      let x = parseInt(inputTwo, 10)
      let y = (x - 32) * (5 / 9)
      let z = y + 273
      console.log(z);
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
  } 
  
  //if 2nd select is Kelvin

  else if (finalUnit == 'kelvin') {
    if (initialUnit == 'celcius') {
      let x = parseInt(inputTwo, 10)
      let z = x - 273
      console.log(z)
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
    else if (initialUnit == 'fahrenheit') {
      inputTwo = document.getElementById('secondValue').value;
      let x = parseInt(inputTwo, 10)
      let y = (x - 32) * (5 / 9)
      let z = y + 273
      console.log(z);
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
    else if (initialUnit == 'kelvin') {
      let z = document.getElementById('secondValue').value;
      console.log(z)
      inputOne = document.getElementById('firstValue').value = z;
    }
  }
}



const converter = (option) => { 
  
  finalUnit = option.value;
  let inputOne = document.getElementById('firstValue').value;
  emptyInputError();
  //if 1st select is celcius

  if (initialUnit == 'celcius' && inputOne !== '') {
    // let valueToConvert = document.getElementById('qty').innerHTML = inputOne + " " + 'degree Celcius equals';

    if (finalUnit == 'celcius') {
      let z = inputOne;
      console.log(z)
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Celcius';
      inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (finalUnit == 'fahrenheit') {
      let x = 18 / 10;
      let z = (x * inputOne) + 32;
      console.log(z)
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Fahrenheit';
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'kelvin') {
      let x = parseInt(inputOne, 10)
      let z = x + 273
      console.log(z)
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Kelvin';
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    
  }
  
  //if 1st select is fahrenheit

  else if (initialUnit == 'fahrenheit') {
    // let valueToConvert = document.getElementById('qty').innerHTML = inputOne + ' ' + 'degree Fahrenheit equals';
    if (finalUnit == 'celcius') {
      let x = parseInt(inputOne, 10)
      let z = (x - 32) * (5 / 9);
      console.log(z);
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Celcius';
     inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'fahrenheit') {
      let z = document.getElementById('firstValue').value;
      console.log(z)
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Fahrenheit';
      inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (finalUnit == 'kelvin') {
      let x = parseInt(inputOne, 10) - 32
      let z = x* (5 / 9) + 273
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Kelvin';
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2);
    }
  } 

  //if 1st select is kelvin
  
  else if (initialUnit == 'kelvin') {
    // let valueToConvert = document.getElementById('qty').innerHTML = inputOne + ' ' + 'degree Kelvin equals';
    if (finalUnit == 'celcius') {
      let x = parseInt(inputOne, 10)
      let z = x - 273
      console.log(z)
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Celcius';
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'fahrenheit') {
      let x = parseInt(inputOne, 10)- 32
      let z = x * (5 / 9) + 273;
      console.log(z);
      // let convertedValue = document.getElementById('convert_qty').innerHTML = z + ' ' + 'degree Fahrenheit';
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'kelvin'){
      let z = document.getElementById('firstValue').value;
      console.log(z) 
      inputTwo = document.getElementById('secondValue').value = z;
    }
  }
}

//||

//Error pop if inpt fields are empty
emptyInputError = () =>{
  let inputOne = document.getElementById('firstValue').value;
let inputTwo = document.getElementById('secondValue').value;  
    if(inputOne === '' && inputTwo === '' ){
   return alert('Input Field is empty, Enter a number to be converted')
  }
}