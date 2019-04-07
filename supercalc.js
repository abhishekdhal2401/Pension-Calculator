var agetoRetire = 60;

//YEAR OF RETIRE SPAN ELEMENTS
var retireDay = document.getElementById('dayOfRetire');
var retireMonth = document.getElementById('monthOfRetire');
var retireYear = document.getElementById('yearOfRetire');


//YEAR OF BIRTH INPUTS
var dobDay = document.getElementById('dobDay');
var dobMonth = document.getElementById('dobMonth');
var dobYear = document.getElementById('dobYear');

//YEAR OF JOIN INPUTS
var dayOfJoin = document.getElementById('dayOfJoin');
var monthOfJoin = document.getElementById('monthOfJoin');
var yearOfJoin = document.getElementById('yearOfJoin');


dobDay.addEventListener("change",function(){

  retireDay.value = dobDay.value  ;

});

dobMonth.addEventListener("change",function(){

  retireMonth.value = dobMonth.value;

});

dobYear.addEventListener("change",function(){

  retireYear.value = parseInt(dobYear.value)+agetoRetire;

});
