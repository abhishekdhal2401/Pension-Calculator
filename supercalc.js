var agetoRetire = 60;

//YEAR OF RETIRE SPAN ELEMENTS
var retireDay = document.getElementById('retireDay');
var retireMonth = document.getElementById('retireMonth');
var retireYear = document.getElementById('retireYear');


//YEAR OF JOIN INPUTS
var dayOfJoin = document.getElementById('dayOfJoin');
var monthOfJoin = document.getElementById('monthOfJoin');
var yearOfJoin = document.getElementById('yearOfJoin');



dayOfJoin.addEventListener("change",function(){

  retireDay.textContent = dayOfJoin.value;

});

monthOfJoin.addEventListener("change",function(){

  retireMonth.textContent = monthOfJoin.value;

});

yearOfJoin.addEventListener("change",function(){

  retireYear.textContent = yearOfJoin.value;

});
