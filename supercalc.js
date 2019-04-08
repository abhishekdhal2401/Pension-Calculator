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


//INPUT FIELD FOR NOT qualified
var month;
var year;
var day;

function calctime(){
year = parseInt(four1y.value) + parseInt(four2y.value) + parseInt(four3y.value) + parseInt(four4y.value) + parseInt(four5y.value) + parseInt(four6y.value) ;

month = parseInt(four1m.value) + parseInt(four2m.value) + parseInt(four3m.value) + parseInt(four4m.value) + parseInt(four5m.value) + parseInt(four6m.value) ;

day = parseInt(four1d.value) + parseInt(four2d.value) + parseInt(four3d.value) + parseInt(four4d.value) + parseInt(four5d.value) + parseInt(four6d.value) ;

year = year + parseInt(month/12);
month = (month%12) + parseInt(day/31);
day = day%31;

document.querySelector("#dayNotQual").value= day;
document.querySelector("#monthNotQual").value= month;
document.querySelector("#yearNotQual").value= year;
// console.log(year);
// console.log(month);
// console.log(day);
}

var calc_holiday = document.querySelector(".calc-holiday");
calc_holiday.addEventListener("change", calctime);

var four1y = document.querySelector("#four-11");
var four2y = document.querySelector("#four-21");
var four3y = document.querySelector("#four-31");
var four4y = document.querySelector("#four-41");
var four5y = document.querySelector("#four-51");
var four6y = document.querySelector("#four-61");

var four1m = document.querySelector("#four-12");
var four2m = document.querySelector("#four-22");
var four3m = document.querySelector("#four-32");
var four4m = document.querySelector("#four-42");
var four5m = document.querySelector("#four-52");
var four6m = document.querySelector("#four-62");

var four1d = document.querySelector("#four-13");
var four2d = document.querySelector("#four-23");
var four3d = document.querySelector("#four-33");
var four4d = document.querySelector("#four-43");
var four5d = document.querySelector("#four-53");
var four6d = document.querySelector("#four-63");



//TOTAL SERVICE CALCULATION AND HALF YEARS

//VALUE OF TIME OF Join
var joinDay = parseInt(dayOfJoin.value);
var joinMonth = parseInt(monthOfJoin.value);
var joinYear = parseInt(yearOfJoin.value);


//VALUE OF TIME OF RETIRE

var dayValue =parseInt(retireDay.value);
var monthValue =parseInt(retireMonth.value);
var yearValue =parseInt(retireYear.value);

//TIME OF Service


var actualDay = dayValue - joinDay;
var actualMonth = monthValue = joinMonth;
var actualYear = yearValue - joinYear;

//WASTED TIME OF SERVICE


var notQualday = parseInt(document.querySelector("#dayNotQual").value);
var notQualmonth = parseInt(document.querySelector("#monthNotQual").value);
var notQualyear = parseInt(document.querySelector("#yearNotQual").value);

//ACTUAL TIME OF SERVICE

document.querySelector("#qualYear");
document.querySelector("#qualMonth");
document.querySelector("#qualDay");
