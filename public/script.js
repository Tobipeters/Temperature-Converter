let x = 'celsius';
let initialUnit = x;
let  finalUnit = x ;
var inputOne = document.getElementById('firstValue');
var inputTwo = document.getElementById('secondValue');
var selectOne = document.getElementById('select_one');
var selectTwo = document.getElementById('select_two');


const myConvert = (option) => {
  inputOne = document.getElementById('firstValue').value;
  inputTwo = document.getElementById('secondValue').value;
  initialUnit = option.value;
  // emptyInputError();
  //if 2nd select is celsius
  if (finalUnit === 'celsius' && inputOne !== '') {
    if (initialUnit === 'celsius') {
      let z = inputTwo;
      inputOne = document.getElementById('firstValue').value = z;
    }
    else if (initialUnit === 'fahrenheit') {
      let x = parseInt(inputTwo, 10)
      let y = x * 9 / 5;
      let z = y + 32;
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
    else if (initialUnit === 'kelvin') {
      let x = parseInt(inputTwo, 10)
      let y = 273
      let z = x + y
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
  } 
  //if 2nd select is fahrenheit 
  else if (finalUnit === 'fahrenheit') {
   if (initialUnit === 'celsius') {
      let x = parseInt(inputTwo, 10)
      let y = (x - 32)
      let z = y * (5 / 9);
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
    else if (initialUnit === 'fahrenheit') {
      let z = document.getElementById('secondValue').value;
      inputOne = document.getElementById('firstValue').value =z;
    }
    else if (initialUnit === 'kelvin') {
      let x = parseInt(inputTwo, 10)
      let y = (x - 32) * (5 / 9)
      let z = y + 273;
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
  } 
  //if 2nd select is Kelvin
  else if (finalUnit == 'kelvin') {
    if (initialUnit == 'celsius') {
      let x = parseInt(inputTwo, 10)
      let z = x - 273
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
    else if (initialUnit == 'fahrenheit') {
      inputTwo = document.getElementById('secondValue').value;
      let x = parseInt(inputTwo, 10)
      let y = (x - 32) * (5 / 9)
      let z = y + 273;
      inputOne = document.getElementById('firstValue').value = z.toFixed(2);
    }
    else if (initialUnit == 'kelvin') {
      let z = document.getElementById('secondValue').value;
      inputOne = document.getElementById('firstValue').value = z;
    }
  }
  displayResult();
}

//second select option function

converter = (option) => { 
  inputOne = document.getElementById('firstValue').value;
  finalUnit = option.value;
  // emptyInputError();
  //if 1st select is celsius
  if (initialUnit == 'celsius' && inputOne !== '') {
    if (finalUnit == 'celsius') {
      let z = inputOne;
      inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (finalUnit == 'fahrenheit') {
      let x = 18 / 10;
      let z = (x * inputOne) + 32;
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'kelvin') {
      let x = parseInt(inputOne, 10)
      let z = x + 273
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    } 
  }
  //if 1st select is fahrenheit
  else if (initialUnit == 'fahrenheit') {
    if (finalUnit == 'celsius') {
      let x = parseInt(inputOne, 10)
      let z = (x - 32) * (5 / 9);;
     inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'fahrenheit') {
      let z = document.getElementById('firstValue').value;
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
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'fahrenheit') {
      let x = parseInt(inputOne, 10)- 32
      let z = x * (5 / 9) + 273;;
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (finalUnit == 'kelvin'){
      let z = document.getElementById('firstValue').value; 
      inputTwo = document.getElementById('secondValue').value = z;
    }
  }
  displayResult();
}
//||
//Error pop up if inpt fields are empty
// emptyInputError = () =>{
//   inputOne = document.getElementById('firstValue').value;
//   inputTwo = document.getElementById('secondValue').value; 
//   let dialog = document.getElementById('dialog_box'); 
//   let enterValue = document.getElementById('enter_value');
//   let initialValue = document.getElementById('no_input');
//   let result = document.getElementById('result');
//     if(inputOne === '' && inputTwo === '' ){
//      dialog.showModal();
//      initialValue.innerHTML = '';
//      result.innerHTML = '';
//      enterValue.innerHTML = `Enter Value to be converted`
//   }
// }

//notifier
notify = () =>{
  let dialog = document.getElementById('dialog_box'); 
  setTimeout( function () {dialog.showModal()}, 3000)

}


/////////closing modal function
closeModal = () =>{
  let dialog = document.getElementById('dialog_box');
  dialog.close();
}

//////////Function to display result
displayResult = () =>{
  let inputOne = document.getElementById('firstValue').value;
  let inputTwo = document.getElementById('secondValue').value;  
  let enterValue = document.getElementById('enter_value');
  let selectOne = document.getElementById('select_one').value;
  let selectTwo = document.getElementById('select_two').value;
  let initialValue = document.getElementById('no_input');
  let result = document.getElementById('result');

  if(inputOne !== '' || inputTwo !== '' ){
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
  }else{
    initialValue.innerHTML = '';
    result.innerHTML='';
    enterValue.innerHTML = `Enter Value to be converted`;
  }
}

/////////Live display of result
liveDisplayOne = (input) =>{
  inputOne = input.value 
  selectOne = document.getElementById('select_one').value;
  selectTwo = document.getElementById('select_two').value;
   //if 1st select is celsius
  if (selectOne === 'celsius') {
    if (selectTwo === 'celsius') {
      let z = inputOne;
     inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (selectTwo == 'fahrenheit') {
      let x = 18 / 10;
      let z = (x * inputOne) + 32;
     inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (selectTwo == 'kelvin') {
      let x = parseInt(inputOne, 10);
      let z = x + 273;
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    } 
  }
  //if 1st select is fahrenheit
  else if (selectOne == 'fahrenheit') {
    if (selectTwo == 'celsius') {
      let x = parseInt(inputOne, 10)
      let z = (x - 32) * (5 / 9);
     inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (selectTwo == 'fahrenheit') {
      let z = document.getElementById('firstValue').value;
      inputTwo = document.getElementById('secondValue').value = z ;
    }
    else if (selectTwo == 'kelvin') {
      let x = parseInt(inputOne, 10) - 32
      let z = x* (5 / 9) + 273
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2);
    }
  } 
  //if 1st select is kelvin
  else if (selectOne == 'kelvin') {
    if (selectTwo == 'celsius') {
      let x = parseInt(inputOne, 10);
      let z = x - 273;
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (selectTwo == 'fahrenheit') {
      let x = parseInt(inputOne, 10)- 32
      let z = x * (5 / 9) + 273;
      inputTwo = document.getElementById('secondValue').value = z.toFixed(2) ;
    }
    else if (selectTwo == 'kelvin'){
      let z = document.getElementById('firstValue').value;
      inputTwo = document.getElementById('secondValue').value = z;
    }
  }
    displayResult();
}

liveDisplayTwo = (input) =>{
  inputTwo = input.value 
  selectOne = document.getElementById('select_one').value;
  selectTwo = document.getElementById('select_two').value;

    //if 2nd select is celsius
    if (selectTwo === 'celsius') {
      if (selectOne === 'celsius') {
        let z = inputTwo;
        inputOne = document.getElementById('firstValue').value = z;
      }
      else if (selectOne === 'fahrenheit') {
        let x = parseInt(inputTwo, 10)
        let y = x * 9 / 5;
        let z = y + 32;
        inputOne = document.getElementById('firstValue').value = z.toFixed(2);
      }
      else if (selectOne === 'kelvin') {
        let x = parseInt(inputTwo, 10);
        let y = 273;
        let z = x + y;
        inputOne = document.getElementById('firstValue').value = z.toFixed(2);
      }
    } 
    //if 2nd select is fahrenheit 
    else if (selectTwo === 'fahrenheit') {
     if (selectOne === 'celsius') {
        let x = parseInt(inputTwo, 10)
        let y = (x - 32)
        let z = y * (5 / 9)
        inputOne = document.getElementById('firstValue').value = z.toFixed(2);
      }
      else if (selectOne === 'fahrenheit') {
        let z = document.getElementById('secondValue').value;
        inputOne = document.getElementById('firstValue').value =z;
      }
      else if (selectOne === 'kelvin') {
        let x = parseInt(inputTwo, 10)
        let y = (x - 32) * (5 / 9)
        let z = y + 273
        inputOne = document.getElementById('firstValue').value = z.toFixed(2);
      }
    } 
    //if 2nd select is Kelvin
    else if (selectTwo == 'kelvin') {
      if (selectOne == 'celsius') {
        let x = parseInt(inputTwo, 10)
        let z = x - 273
        inputOne = document.getElementById('firstValue').value = z.toFixed(2);
      }
      else if (selectOne == 'fahrenheit') {
        inputTwo = document.getElementById('secondValue').value;
        let x = parseInt(inputTwo, 10)
        let y = (x - 32) * (5 / 9)
        let z = y + 273
        inputOne = document.getElementById('firstValue').value = z.toFixed(2);
      }
      else if (selectOne == 'kelvin') {
        let z = document.getElementById('secondValue').value;
        inputOne = document.getElementById('firstValue').value = z;
      }
    }
     displayResult();
}