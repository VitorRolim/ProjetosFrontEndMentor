const btn1 = document.getElementById('btn1').value;
const btn2 = document.getElementById('btn2').value;
const btn3 = document.getElementById('btn3').value;
const btn4 = document.getElementById('btn4').value;
const btn5 = document.getElementById('btn5').value;
const resultado = document.getElementById('div3');
const submit = document.getElementById('submit');


function ratingValue(){
    if(btn1 = true){
      resultado.textContent = `You select ${btn1} of 5`
    }else if(btn2 = true){
      resultado.textContent = `You select ${btn2} of 5`
    }else if(btn3 = true){
      resultado.textContent = `You select ${btn3} of 5`
    }else if(btn3 = true){
      resultado.textContent = `You select ${btn4} of 5`
    }else if(btn3 = true){
      resultado.textContent = `You select ${btn5} of 5`
    }
  
}

submit.addEventListener('click', ratingValue);
















/*
const tdsBtns = document.querySelectorAll('[name=rating');
tdsBtns.forEach(btn => {    
    btn.addEventListener('click', function onClick() {     
     /*Update the text using the value of the radio button*/
     /*
     document.querySelector("#rating").innerHTML = `Thanks for rating us ${this.value}!`;
    })
  });
*/