
function Add() {
    let Num1 = document.getElementById('Num1').value;
    let Num2 = document.getElementById('Num2').value;
    let Result = Number(Num1)+Number(Num2);
    document.getElementById('Result').innerHTML = Result;
}
function Brand() {
    let Num1 = document.getElementById('Num1').value;
    let Num2 = document.getElementById('Num2').value;
    let Result = Number(Num1)-Number(Num2);
    document.getElementById('Result').innerHTML = Result;
}
function Addd() {
    let Num1 = document.getElementById('Num1').value;
    let Num2 = document.getElementById('Num2').value;
    let Result = Number(Num1)*Number(Num2);
    document.getElementById('Result').innerHTML = Result;
}
function Brandd() {
    let Num1 = document.getElementById('Num1').value;
    let Num2 = document.getElementById('Num2').value;
    let Result = Number(Num1)/Number(Num2);
    document.getElementById('Result').innerHTML = Result;
}
