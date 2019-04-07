var agetoRetire = 60;

//YEAR OF RETIRE INPUT ELEMENTS
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

// YEAR OF RETIREMENT CALCULATION
dobDay.addEventListener("change",function(){

  retireDay.value = dobDay.value  ;

});

dobMonth.addEventListener("change",function(){

  retireMonth.value = dobMonth.value;

});

dobYear.addEventListener("change",function(){

  retireYear.value = parseInt(dobYear.value)+agetoRetire;

});

//DA %
var daPercent = document.querySelector("#daPercent");

//SUM OF BASIC PAY AND NPA LAST MONTH
var lastMonth = document.querySelector("#lastMonth");


//SUM OF BASIC PAY AND NPA LAST 10 months
var tenMonths = document.querySelector("#tenMonths");


//DA Rupees value
var daRupees;
var daRS = document.getElementById('daRS');




// DA Rupees INPUTS

daPercent.addEventListener("change",compare);
lastMonth.addEventListener("change",compare);
tenMonths.addEventListener("change",compare);

function compare(){
  if(lastMonth.value > tenMonths.value){
  daRupees = (parseFloat(lastMonth.value) * parseFloat(daPercent.value))/100.0;
}

else{
  daRupees = (parseFloat(tenMonths.value) * parseFloat(daPercent.value))/100.0;
}

    daRS.value = String(daRupees);

}
