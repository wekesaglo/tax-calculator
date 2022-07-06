const pay= document.getElementById('income');
const benefit=document.getElementById('benefits');
const oldf=200;
const nhifc=1700;
const perelif=2400;
const perelif2=28800
const out= document.getElementById("output");
const out1= document.getElementById("output1");
const out2= document.getElementById("output2");
const out3= document.getElementById("output3");
const out4= document.getElementById("output4");
const out5= document.getElementById("output5");
const out6= document.getElementById("output6");
const out7= document.getElementById("output7");
const out8= document.getElementById("output8");
const out9= document.getElementById("output9");
const out10= document.getElementById("output10");
const out11= document.getElementById("output11");
function display1(){
    out.innerHTML='Income before pension deduction: KSH' + pay.value;
    out1.innerHTML='Benefits in kind: KSH' + benefit.value;
    out2.innerHTML='Deductible NSSF pension contribution: KSH';

    const mean= (parseInt(income.value) + parseInt(benefit.value));
    const result = (parseInt(income.value) + parseInt(benefit.value))- oldf;    
    out3.innerText = 'Income after pension deduction: KSH'+  result; 

    out4.innerHTML='Taxable income: KSH' + result;

    var tax=0;
    if(result < 12298){
    tax = result * 0.1;
    }
   else if(result > 12298 && result< 23885){
    tax = result * 0.15;
    }
    else if(result > 23886 && result< 35472){
     tax = result * 0.20;
   }
   else if(result > 35473 && result< 47059){
     tax = result * 0.25;
    }
    else (result > 47060);{
       tax = result * 0.30; 
   }

    out5.innerHTML='Tax on taxable income: KSH' + tax;
    out6.innerHTML='Personal relief: KSH' + perelif;

     const netoff= tax-perelif;
    out7.innerHTML='Tax net off relief: KSH' + netoff;
    out8.innerHTML='PAYE: KSH' + netoff;
    out9.innerHTML='Chargeable income: KSH' + result;
    out10.innerHTML='NHIF contribution: KSH' + nhifc;

    const net= result-nhifc-netoff;
    out11.innerHTML='Net pay: KSH' + net;
  }
  
function display2(){
  out.innerHTML='Income before pension deduction: KSH' + pay.value;
  out1.innerHTML='Benefits in kind: KSH' + benefit.value;
  out2.innerHTML='Deductible NSSF pension contribution: KSH';

  const result1= (parseInt(income.value) + parseInt(benefit.value));
  const result = (parseInt(income.value) + parseInt(benefit.value))- oldf;    
  out3.innerText = 'Income after pension deduction: KSH'+  result; 

  out4.innerHTML='Taxable income: KSH' + result;

  var tax=0;
  if(result < 147580){
  tax = result * 0.1;
  }
 else if(result > 147580 && result< 286623){
  tax = result * 0.15;
  }
  else if(result > 286623 && result< 425666){
   tax = result * 0.20;
 }
 else if(result > 425666 && result< 564709){
   tax = result * 0.25;
  }
  else (result > 564709);{
     tax = result * 0.30; 
 }

  out5.innerHTML='Tax on taxable income: KSH' + tax;
  out6.innerHTML='Personal relief: KSH' + perelif2;

   const netoff= tax-perelif2;
  out7.innerHTML='Tax net off relief: KSH' + netoff;
  out8.innerHTML='PAYE: KSH' + netoff;
  out9.innerHTML='Chargeable income: KSH' + result;
  out10.innerHTML='NHIF contribution: KSH' + nhifc;

  const net= result-nhifc-netoff;
  out11.innerHTML='Net pay: KSH' + net;
}

function display3(){
  out2.innerHTML='Deductible NSSF pension contribution: KSH' + oldf;
}

function display4(){
  out2.innerHTML='Deductible NSSF pension contribution: KSH';
}

function display5(){
  if (result<5999){
    nhifc=150;
  }
 else if (result>5999 && result<7999){
    nhifc=300;
  }
 else if (result>7999 && result<11999){
    nhifc=4000;
  }
 else if (result>11999 && result<14999){
    nhifc=500;
  }
 else if (result>14999 && result<19999){
    nhifc=600;
  }
 else if (result>19999 && result<24999){
    nhifc=750;
  }
 else if (result>24999 && result<29999){
    nhifc=850;
  }
 else if (result>29999 && result<34999){
    nhifc=900;
  }
 else if (result>34999 && result<39999){
    nhifc=950;
  }
 else if (result>39999 && result<44999){
    nhifc=1000;
  }
 else if (result>44999 && result<49999){
    nhifc=1100;
  }
 else if (result>49999 && result<59999){
    nhifc=1200;
  }
 else if (result>59999 && result<69999){
    nhifc=1300;
  }
 else if (result>69999 && result<79999){
    nhifc=1400;
  }
 else if (result>79999 && result<89999){
    nhifc=1500;
  }
 else if (result>89999 && result<99999){
    nhifc=1600;
  } 
  else (result>100000);{
    nhifc=1700;
  }
  out10.innerHTML='NHIF contribution: KSH' + nhifc;
}

function display6(){
  out10.innerHTML='NHIF contribution: KSH'; 
}