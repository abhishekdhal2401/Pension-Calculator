var agetoRetire = 60;

//YEAR OF RETIRE INPUT ELEMENTS
var retireDay = document.getElementById('dayOfRetire');
var retireMonth = document.getElementById('monthOfRetire');
var retireYear = document.getElementById('yearOfRetire');

function retireRound(){
  if (typeof dobDay.value!=NaN&&typeof dobMonth.value!=NaN&&typeof dobYear.value!=NaN) {
    if (dobDay.value<3) {
      retireYear.value=parseInt(dobYear.value) + agetoRetire;
        if (dobYear.value%4==0&&dobYear.value%100!=0) {
          calender_retire[1]=29;
          }
          if (dobMonth.value==1) {
            retireMonth.value=12;
            retireYear.value=parseInt(dobYear.value)-1 + agetoRetire;
            retireDay.value=31;
          }
          else {
            retireDay.value=calender_retire[dobMonth.value-2];
            retireMonth.value=dobMonth.value-1;
          }
          console.log(retireDay.value+"/"+retireMonth.value+"/"+retireYear.value);

    }
    else {
      if (dobYear.value%4==0&&dobYear.value%100!=0) {
        calender_retire[1]=29;
      }
        retireMonth.value=dobMonth.value;
        retireYear.value=parseInt(dobYear.value) + agetoRetire;
        retireDay.value=calender_retire[dobMonth.value-1];
        console.log(retireDay.value+"/"+retireMonth.value+"/"+retireYear.value);
    }
  }

}
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
  // retireDay.value = dobDay.value;
  retireRound();
});

dobMonth.addEventListener("change",function(){
//  retireMonth.value = dobMonth.value;
  retireRound();
});

dobYear.addEventListener("change",function(){
//  retireYear.value = parseInt(dobYear.value)+agetoRetire;
  retireRound();
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
var great;

daPercent.addEventListener("change",compare);
lastMonth.addEventListener("change",compare);
tenMonths.addEventListener("change",compare);

function compare(){
  if(lastMonth.value > tenMonths.value){
  daRupees = (parseFloat(lastMonth.value) * parseFloat(daPercent.value))/100.0;
  great = parseFloat(lastMonth.value);
}

else{
  daRupees = (parseFloat(tenMonths.value) * parseFloat(daPercent.value))/100.0;
  great = parseFloat(tenMonths.value);
}

    daRS.value = String(daRupees);

}


//INPUT FIELD FOR NOT qualified
var monthNotQual=0;
var yearNotQual=0;
var dayNotQual=0;

function calctime(){
yearNotQual = parseInt(four1y.value) + parseInt(four2y.value) + parseInt(four3y.value) + parseInt(four4y.value) + parseInt(four5y.value) + parseInt(four6y.value) ;

monthNotQual = parseInt(four1m.value) + parseInt(four2m.value) + parseInt(four3m.value) + parseInt(four4m.value) + parseInt(four5m.value) + parseInt(four6m.value) ;

dayNotQual = parseInt(four1d.value) + parseInt(four2d.value) + parseInt(four3d.value) + parseInt(four4d.value) + parseInt(four5d.value) + parseInt(four6d.value) ;

yearNotQual = yearNotQual+parseInt(monthNotQual/12);
monthNotQual = (monthNotQual%12)+parseInt(dayNotQual/31);
dayNotQual = dayNotQual%31;

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

  var day = calender_join[moj-1]-doj+dor;
  var month= 12-moj+mor-1;
  var year =yor-yoj-2;

  actualYear = year + parseInt(month/12);
  actualMonth = (month%12) + parseInt(day/31);
  actualDay = day%31;

}

   timeOfService.addEventListener("change",calc_time_span);

// TOTAL QUALIFIED SERVICE TIME DONE (TOTAL SERVICE TIME - NOT QUALIFIED SERVICE TIME)-------
   document.querySelector("#serviceNotQualified").addEventListener("change",totalServiceQualified);
   timeOfService.addEventListener("change",totalServiceQualified);
   function totalServiceQualified(){
     var day = 31-dayNotQual+actualDay;
     var month = 12-monthNotQual+actualMonth-1;
     var year = actualYear-yearNotQual-2;

     year = year + parseInt(month/12);
     month = (month%12)+parseInt(day/31);
     day = day%31;

     var hf=year*2;
     if(hf!=NaN){
       if (month >= 3&&month<9) {
         hf++;
       }
       if (month >=9) {
         hf+=2;
       }
     }

     document.querySelector("#qualYear").value=year;
     document.querySelector("#qualMonth").value=month;
     document.querySelector("#qualDay").value=day;
     document.querySelector("#totalHalfYear").value=hf;
   }


var npa=document.querySelector("#npa");
var efg=document.querySelector("#efg");
var efp=document.querySelector("#efp");

document.getElementById('secondChange').addEventListener("change",function(){


efg.value = parseFloat(daRS.value) + great + parseFloat(npa.value);
efp.value = great + parseFloat(npa.value);

});




document.getElementById('submit').addEventListener("click",function(){


    document.getElementById('retireShow').innerHTML = " " + retireDay.value + "/" + retireMonth.value + "/" + retireYear.value;
    document.getElementById('qualShow').innerHTML = " " + totalHalfYear.value + " Half Years";

//CALCULATION MODAL Gratuity
    var comm = document.querySelector("#comm");
    var supcommfac = 8.287;
    var sg;
    var rg;
    var halfYearCheck = parseInt(totalHalfYear.value);
    var gratuityShow = document.getElementById('gratuity');
    var basicpension = document.querySelector("#basicpension");

    comm.value=comm.value?comm.value:0;

    if(halfYearCheck < 10){
      //Only service gratuity
      sg = 0.5 * (parseInt(efg.value) * halfYearCheck);
      gratuityShow.innerHTML = "₹ " + sg;

    }
    else if(halfYearCheck >= 10 && halfYearCheck < 20){
      //Service and retirement gratuity
      sg =  0.5 * (parseInt(efg.value) * halfYearCheck);
      // halfYearCheck atmost 33/2 and rg = 20,00,000
      rg = 0.25 * parseInt(efg.value) * halfYearCheck;
      if(rg >= 2000000){
        rg = 2000000;
      }


      gratuityShow.innerHTML = " ₹ " + (sg + rg);


    }
    else{
      //Retirement gratuity and pension


    }
  basicpension.innerHTML = " ₹ "+ (parseInt(lastMonth.value)/2 * (100-parseInt(comm.value))/100);
  if (parseInt(comm.value)>0) {
    document.querySelector("#commVal").innerHTML= "Commutation Value: ₹ "+  Math.round(supcommfac  * 12 * parseInt(comm.value) /100 * parseInt(lastMonth.value)/2);
  }
  else {
    document.querySelector("#commVal").innerHTML="";
  }
});
