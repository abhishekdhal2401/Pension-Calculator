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
var great;
var pes=parseFloat((great+npa)/2);

daPercent.addEventListener("change",compare);
lastMonth.addEventListener("change",compare);
tenMonths.addEventListener("change",compare);

function compare(){
  if(parseInt(lastMonth.value) > parseInt(tenMonths.value)/10){
  daRupees = (parseFloat(lastMonth.value) * parseFloat(daPercent.value))/100.0;
  great = parseFloat(lastMonth.value);
}

else{
  daRupees = (parseFloat(tenMonths.value)/10 * parseFloat(daPercent.value))/100.0;
  great = parseFloat(tenMonths.value)/10;
}

    daRS.value = String(daRupees);
// console.log(great);
}


//INPUT FIELD FOR NOT qualified
var monthNotQual=0;
var yearNotQual=0;
var dayNotQual=0;

function calctime(){
yearNotQual = parseInt(four1y.value) + parseInt(four2y.value) + parseInt(four3y.value) + parseInt(four4y.value) + parseInt(four5y.value) + parseInt(four6y.value) ;

monthNotQual = parseInt(four1m.value) + parseInt(four2m.value) + parseInt(four3m.value) + parseInt(four4m.value) + parseInt(four5m.value) + parseInt(four6m.value) ;

dayNotQual = parseInt(four1d.value) + parseInt(four2d.value) + parseInt(four3d.value) + parseInt(four4d.value) + parseInt(four5d.value) + parseInt(four6d.value) ;

yearNotQual = (yearNotQual)?yearNotQual:0;
monthNotQual = (monthNotQual)?monthNotQual:0;
dayNotQual = (dayNotQual)?dayNotQual:0;

if (dayNotQual/31>0) {
  monthNotQual = monthNotQual+ parseInt(dayNotQual/31);
  dayNotQual=dayNotQual%31;
}
if (monthNotQual/12>0) {
  yearNotQual= yearNotQual + parseInt(monthNotQual/12);
  monthNotQual=monthNotQual%12;
}

document.querySelector("#dayNotQual").value= dayNotQual;
document.querySelector("#monthNotQual").value= monthNotQual;
document.querySelector("#yearNotQual").value= yearNotQual;

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



//--------TOTAL SERVICE CALCULATION AND HALF YEARS------------//

//CALCULATION FOR TOTAL TIME OF SERVICE STARTS

var calender_join=[31,28,31,30,31,30,31,31,30,31,30,31];
var calender_retire=[31,28,31,30,31,30,31,31,30,31,30,31];
var timeOfService = document.querySelector("#timeOfService");
var actualDay=0;
var actualMonth=0;
var actualYear=0;

function calc_time_span() {
  var doj = parseInt(document.querySelector("#dayOfJoin").value);
  var moj = parseInt(document.querySelector("#monthOfJoin").value);
  var yoj = parseInt(document.querySelector("#yearOfJoin").value);

  var dor = parseInt(document.querySelector("#dayOfRetire").value);
  var mor = parseInt(document.querySelector("#monthOfRetire").value);
  var yor = parseInt(document.querySelector("#yearOfRetire").value);

  if (yoj%4 == 0&&yoj%100!=0) {
    calender_join[1]=29;
  }

  if (yor%4==0&&yor%100!=0) {
    calender_retire[1]=29;
  }

  var day = calender_join[moj-1] - doj + dor;
  var month= 12-moj+mor-1;
  var year =yor-yoj-1;

  if (day/31>0) {
    month = month+ parseInt(day/31);
    day=day%31;
  }
  if (month/12>0) {
    year= year + parseInt(month/12);
    month=month%12;
  }

  actualDay=day;
  actualMonth=month;
  actualYear=year;


}

   timeOfService.addEventListener("change",calc_time_span);

// TOTAL QUALIFIED SERVICE TIME DONE (TOTAL SERVICE TIME - NOT QUALIFIED SERVICE TIME)-------
   document.querySelector("#serviceNotQualified").addEventListener("change",totalServiceQualified);
   timeOfService.addEventListener("change",totalServiceQualified);
   function totalServiceQualified(){
     var day = 31-dayNotQual+actualDay + 1;
     var month = 12-monthNotQual+actualMonth-1;
     var year = actualYear-yearNotQual-1;


     if (day/31>0) {
       month = month+ parseInt(day/31);
       day=day%31;
     }
     if (month/12>0) {
       year= year + parseInt(month/12);
       month=month%12;
     }


     hf=year*2;
     if(hf!=NaN){
       if (month >= 3&&month<9) {
         hf++;
       }
       if (month >=9) {
         hf+=2;
       }
     }

     document.querySelector("#qualYear").value=year + " years";
     document.querySelector("#qualMonth").value=month + " months";
     document.querySelector("#qualDay").value=day + " days";
     document.querySelector("#totalHalfYear").value=hf + " half years";
   }


var hf;
var npa=document.querySelector("#npa");
var efg=document.querySelector("#efg");
var efp=document.querySelector("#efp");


document.getElementById('secondChange').addEventListener("change",function(){

if (!(npa.value)) {
  npa.value=0;
}

efg.value = parseFloat(daRS.value) + great + parseFloat(npa.value);
efp.value = great + parseFloat(npa.value);

});

// DEATH GRATUITY

document.getElementById('submit').addEventListener("click",function(){
  efgValue = parseInt(efg.value);
  console.log(efgValue);
  var halfYearCheck = parseInt(document.querySelector("#totalHalfYear").value);
  console.log(halfYearCheck);
  var dGratuity;
  var gratuityFactor;

if(halfYearCheck < 2){
  dGratuity = 2 * efgValue;
}
else if(halfYearCheck >= 2 && halfYearCheck < 10){
  dGratuity = 6 * efgValue;

}
else if( halfYearCheck >= 10 && halfYearCheck < 40){
  dGratuity = 12 * efgValue;
}
else{
  if(halfYearCheck)
  dGratuity = efgValue * 0.5 * halfYearCheck;
}
document.querySelector("#gratuity").innerHTML = dGratuity.toLocaleString('en-IN' ,{style: 'currency', currency: 'INR'});
//PENSION

var enhancedPension = document.getElementById('enhancedPension');
var normalPension = document.getElementById('normalPension');
efpValue = parseInt(efp.value);

//enhanced basic pension = basic pay * 0.5 upto 10 Years
enhancedPension.innerHTML = (efpValue * 0.5).toLocaleString('en-IN' ,{style: 'currency', currency: 'INR'});

//normal pension = basic pay * 0.33
normalPension.innerHTML = (efpValue * (3/10)).toLocaleString('en-IN' ,{style: 'currency', currency: 'INR'});



//Dates
var fromEnhanced = document.getElementById('from');
var toEnhanced = document.getElementById('to');
var normalTo = document.getElementById('normalTo');


fromEnhanced.innerHTML =(parseInt(retireDay.value)+1) + "/" + retireMonth.value + "/" + retireYear.value;

toEnhanced.innerHTML =retireDay.value + "/" + retireMonth.value + "/" + (parseInt(retireYear.value)+7);

normalTo.innerHTML = (parseInt(retireDay.value)+ 1) + "/" + retireMonth.value + "/" + (parseInt(retireYear.value)+7);

});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
