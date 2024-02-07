// javascript

let InputNum=document.getElementById("input_num")
let BTNCOnvert=document.getElementById("btn_convert")
let outputmeter=document.getElementById("meter")
let outputliter=document.getElementById("liter")
let outputkilogram=document.getElementById("kilogram")

BTNCOnvert.addEventListener("click", function(){
    ///convert meter to feet....
     outputmeter.innerHTML = `${InputNum.value} meters = ${(InputNum.value * 3.281).toFixed(3)} feet | ${InputNum.value} feet= ${(InputNum.value / 3.281).toFixed(3)} meters`
       //convert liter to gallon...
     outputliter.innerHTML = `${InputNum.value} liters=${(InputNum.value * 0.264).toFixed(3)} gallon | ${InputNum.value} gallon =${(InputNum.value /0.264).toFixed(3)} liter`
       //convert kg to pounds..
        outputkilogram.innerHTML = ` ${InputNum.value} kg= ${(InputNum.value * 2.204).toFixed(3)} pounds | ${InputNum.value} pounds = ${(InputNum.value / 0.453592).toFixed(3)} kg`
});



