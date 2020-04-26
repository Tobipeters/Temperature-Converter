let x = 'celsius';
let initialUnit = x;
let  finalUnit = x ;
var inputOne = document.getElementById('firstValue');
var inputTwo = document.getElementById('secondValue');

const myConvert = (option) => {
  let inputOne = document.getElementById('firstValue').value;
  let inputTwo = document.getElementById('secondValue').value;
 
  initialUnit = option.value;
  emptyInputError();

  //if 2nd select is celsius

  if (finalUnit === 'celsius' && inputOne !== '') {
    if (initialUnit === 'celsius') {
      let z = inputTwo;
      console.log(z)
      inputOne = document.getElementById('firstValue').value = z;
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
   if (initialUnit === 'celsius') {
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
    if (initialUnit == 'celsius') {
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
  displayResult();
}



const converter = (option) => { 
  let inputOne = document.getElementById('firstValue').value;
  let inputTwo = document.getElementById('secondValue').value;
  
  finalUnit = option.value;
  emptyInputError();
  //if 1st select is celsius

  if (initialUnit == 'celsius' && inputOne !== '') {
    if (finalUnit == 'celsius') {
      let z = inputOne;
      console.log(z)
      inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (finalUnit == 'fahrenheit') {
      let x = 18 / 10;
      let z = (x * inputOne) + 32;
      console.log(z)
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'kelvin') {
      let x = parseInt(inputOne, 10)
      let z = x + 273
      console.log(z)
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    
  }
  
  //if 1st select is fahrenheit

  else if (initialUnit == 'fahrenheit') {
    if (finalUnit == 'celsius') {
      let x = parseInt(inputOne, 10)
      let z = (x - 32) * (5 / 9);
      console.log(z);
     inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'fahrenheit') {
      let z = document.getElementById('firstValue').value;
      console.log(z)
      inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (finalUnit == 'kelvin') {
      let x = parseInt(inputOne, 10) - 32
      let z = x* (5 / 9) + 273
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2);
    }
  } 

  //if 1st select is kelvin
  
  else if (initialUnit == 'kelvin') {
    if (finalUnit == 'celsius') {
      let x = parseInt(inputOne, 10)
      let z = x - 273
      console.log(z)
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'fahrenheit') {
      let x = parseInt(inputOne, 10)- 32
      let z = x * (5 / 9) + 273;
      console.log(z);
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'kelvin'){
      let z = document.getElementById('firstValue').value;
      console.log(z) 
      inputTwo = document.getElementById('secondValue').value = z;
    }
  }
  displayResult();
}

//||

//Error pop up if inpt fields are empty
emptyInputError = () =>{
  let inputOne = document.getElementById('firstValue').value;
  let dialog = document.getElementById('dialog_box');
  let inputTwo = document.getElementById('secondValue').value;  
  let enterValue = document.getElementById('enter_value');
  let initialValue = document.getElementById('no_input');
  let result = document.getElementById('result');
    if(inputOne === '' && inputTwo === '' ){
     dialog.showModal();
     initialValue.innerHTML = '';
     result.innerHTML = '';
     enterValue.innerHTML = `Enter Value to be converted`

  }
}
//closing modal function
closeModal = () =>{
  let dialog = document.getElementById('dialog_box');
  dialog.close();
}
//Function to display result
displayResult = () =>{
  let inputOne = document.getElementById('firstValue').value;
  let inputTwo = document.getElementById('secondValue').value;  
  let enterValue = document.getElementById('enter_value');
  let selectOne = document.getElementById('select_one').value;
  let selectTwo = document.getElementById('select_two').value;
  let initialValue = document.getElementById('no_input');
  let result = document.getElementById('result');

  if(inputOne !== '' && inputTwo !== '' ){
    enterValue.innerHTML = ''
    if(selectOne == 'celsius'){
      initialValue.innerHTML = `${inputOne}&deg;C =`
      if(selectTwo === 'celsius'){
        result.innerHTML = `${inputTwo}&deg;C `;
      }else if(selectTwo === 'fahrenheit'){
        result.innerHTML = `${inputTwo}&deg;F`;
      }else if(selectTwo === 'kelvin'){
        result.innerHTML = `${inputTwo}K`;
      }
    }else if (selectOne == 'fahrenheit'){
      initialValue.innerHTML = `${inputOne}&deg;F =`
      if(selectTwo === 'celsius'){
        result.innerHTML = `${inputTwo}&deg;C`;
      }else if(selectTwo === 'fahrenheit'){
        result.innerHTML = `${inputTwo}&deg;F`;
      }else if(selectTwo === 'kelvin'){
        result.innerHTML = `${inputTwo}K`;
      }
    }
    else if (selectOne == 'kelvin'){
      initialValue.innerHTML = `${inputOne}K =`
      if(selectTwo === 'celsius'){
        result.innerHTML = `${inputTwo}&deg;C`;
      }else if(selectTwo === 'fahrenheit'){
        result.innerHTML = `${inputTwo}&deg;F`;
      }else if(selectTwo === 'kelvin'){
        result.innerHTML = `${inputTwo}K`;
      }
    }
  }
}