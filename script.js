const addButton = document.querySelector('.addNumbers')

addButton.addEventListener('click', function(){
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("seccondNumber").value;


    const result = document.querySelector(".result");

    const sum = parseFloat(num1) + parseFloat(num2);
    result.innerHTML =  `<i class="fas fa-equals icon"></i>` + sum;
});