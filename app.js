let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let calculate = document.getElementById('calculate')
let clear = document.getElementById('clear')
let container = document.querySelector('.container')
let result = document.querySelector('.result')
let bmiResult = document.querySelector('.bmiResult')


calculate.addEventListener('click', function () {
    // console.log('clicked')
    let heightCM = parseFloat(height.value)
    let kg = parseFloat(weight.value)
    if(isNaN(heightCM) || isNaN(kg)){
        alert('enter valid inputs')
        return;
    }

    if(heightCM <= 0 || kg <= 0){
        alert('Values must be positive')
        return;
    }

    let heightM = heightCM / 100;
    let bmi = kg / (heightM * heightM)
    let bmiDisplay;
    bmiDisplay = bmi.toFixed(2)

    let status = "";
    const UNDERWEIGHT = 18.5;
    const NORMAL = 25;
    const OVERWEIGHT = 30;
    if (bmi < UNDERWEIGHT) {
        // console.log('perfect weight')
        status = 'Underweight';
        bmiResult.style.color = 'orange'
        // bmiResult.textContent = "Your BMI is: "
        // bmiResult.append(bmiDisplay)
    }
    else if (bmi < NORMAL) {
        status = 'Normal';
        bmiResult.style.color = 'green'
        // bmiResult.textContent = "Your BMI is: "
        // bmiResult.append(bmiDisplay)
    }
    else if (bmi < OVERWEIGHT) {
        status = 'Overweight';
        bmiResult.style.color = 'orange'
        // bmiResult.append(bmiDisplay)
    }
     else {
         status = 'Obese'
        bmiResult.style.color = 'red'
        // bmiResult.append(bmiDisplay)
    }
    bmiResult.textContent = `Your BMI is: ${bmiDisplay} (${status})`

    // console.log(bmi)

    // console.log()
    // height.value = ""
    // weight.value = ""

})

clear.addEventListener('click', function(){
    height.value = "";
    weight.value = "";
    bmiResult.textContent = ""
})
