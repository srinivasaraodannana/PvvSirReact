import React from 'react';
import './index.css';
import { MyChart2 } from './graph';


export function Table1(props){
  var arr=props.ar
  var table = "<table class='table table-bordered'  > ";
  table += "<thead><tr>";
    table += `<th rowspan="2">${arr[0][0]} %</th><th colspan='${(arr[0].length-1)}'> Dry Density (g/cc)</th></tr><tr>`;
  for (var i = 1; i < arr[0].length; i++) {
    table += `<th>${arr[0][i]}</th>`;
  }
  table += "</tr></thead><tbody>";
  for (var j = 1; j < arr.length; j++) {
    table += "<tr>";
    for (var k = 0; k < arr[j].length; k++) {
      table += `<td>${arr[j][k]}</td>`;
    }
    table += "</tr>";
  }
  table += "</tbody></table>";
  return(
   
<>
<div dangerouslySetInnerHTML={{ __html: table }}></div>

</>
  );
}



export function Table3(prop){
  const sieve_size=prop.sieve_size
  const weight_retained=prop.weight_retained
  const cumulative_percent_passing = [];
    
  const cumulative_percent_retained=[]
  

 var a=0
 var total_wt=0
  for( var i=0;i<sieve_size.length;i++){
    total_wt+=weight_retained[i]
  }
  a=weight_retained[0]/total_wt*100
  cumulative_percent_retained.push(a.toFixed(2))
  cumulative_percent_passing.push((100-a).toFixed(2))
  for( var i=1;i<sieve_size.length;i++){
    a=a+weight_retained[i]/total_wt*100
   
    cumulative_percent_retained.push(a.toFixed(2))
    cumulative_percent_passing.push((100-a).toFixed(2))
  }
  const sieveDataQ = {
    labels: sieve_size,
    datasets: [
      {
        label: "Cumulative percent passing",
        data: cumulative_percent_passing,
      },
    ],
  };
  

  const findSieveSize = (cumulative_percent_passing) => {
    // Find the closest values in the cumulative_percent_passing array to the target value
    let lowerIndex = 0;
    let upperIndex = sieveDataQ.datasets[0].data.length - 1;
    for (let i = 0; i < sieveDataQ.datasets[0].data.length; i++) {
      if (sieveDataQ.datasets[0].data[i] <= cumulative_percent_passing) {
        lowerIndex = i;
        break;
      }
    }
    for (let i = sieveDataQ.datasets[0].data.length - 1; i >= 0; i--) {
      if (sieveDataQ.datasets[0].data[i] >= cumulative_percent_passing) {
        upperIndex = i;
        break;
      }
    }
  
    // Calculate the sieve size corresponding to the target cumulative percent passing
    let lowerValue = sieveDataQ.datasets[0].data[lowerIndex];
    let upperValue = sieveDataQ.datasets[0].data[upperIndex];
    let lowerSize = sieveDataQ.labels[lowerIndex];
    let upperSize = sieveDataQ.labels[upperIndex];
    let sieveSize = lowerSize + (cumulative_percent_passing - lowerValue) * (upperSize - lowerSize) / (upperValue - lowerValue);
  
    return sieveSize;
  };
  
  
  let D10=findSieveSize(10)
  D10=D10.toFixed(2)
  let D30=findSieveSize(30)
  D30=D30.toFixed(3)
  let D60=findSieveSize(60)
  D60=D60.toFixed(2)
  
  
  
  
  
  let Cu = D60 / D10;
  Cu=Cu.toFixed(2)
  let Cc = (D30 * D30) / (D10 * D60);
  Cc=Cc.toFixed(2)
  
  // Perform the IS classification
  let classification = "";
  if (Cu > 4) {
    classification = "Coarse Grained ";
  } else if (Cu <= 4 && Cu >= 2) {
    classification = "Medium Grained ";
  } else if (Cu < 2) {
    classification = "Fine Grained ";
  }



  var table = "<table class='table table-bordered' >";
          table+='<thead > <tr>'
        
          table+='<th> Sieve Size (mm) </th><th> Weight retained(grams) </th><th>Cummulative % Retained </th><th>Cummulative % Passing </th> ';
        
           table+='</thead> </tr> <tbody> '
       
         
          
            
          for (var j = 0; j < (sieve_size.length); j++) {
            table += "<tr>";
                   table += "<td>" + sieve_size[j] + "</td>";
                   table += "<td>" + weight_retained[j] + "</td>";
                   table += "<td>" + cumulative_percent_retained[j] + "</td>";
                   table += "<td>" + cumulative_percent_passing[j] + "</td>";
                   
          
            
          
          table += "</tr>";
        }
        table += "</tbody></table>";


  var res=`<h5 class="text-center">Total Weight = ${total_wt} grams </h5><h3 class="text-center"> D30=${D30},D60=${D60},D10=${D10}<br><br>
  Cu=${Cu},Cc=${Cc}<br><br>Classification=${classification}</h3> <br><br>`;      
  return(
    <>
    <div dangerouslySetInnerHTML={{ __html: table }}></div>
   
    <div dangerouslySetInnerHTML={{ __html: res }}></div>
    <MyChart2 sieve_size={sieve_size} cumulative_percent_passing={cumulative_percent_passing}/>
    
    
    </>
  )
}

export function Table2(prop){
 



var a=prop.a
var b=prop.b
var table = "<table class='table table-bordered' >";
          table+='<thead > <tr>'
        
          table+='<th> Water Content %</th><th> Internal Friction Angle</th> ';
        
           table+='</thead> </tr> <tbody> '
       
         
          
            
          for (var j = 0; j < (a.length); j++) {
            table += "<tr>";
                   table += "<td>" + a[j] + "</td>";
                   table += "<td>" + b[j] + "</td>";
                   
          
            
          
          table += "</tr>";
        }
        table += "</tbody></table>";

    
  return(
    
  
    <>
<div dangerouslySetInnerHTML={{ __html: table }}></div>
</>
  )
}


export function Table4(prop){

var x=prop.allvalues[1]
var y=prop.allvalues[2]




var regression = linearRegression(x, y);
var slope = regression.slope;

// Display the slope of the line
var q=Math.atan(slope)*180/3.14159265359;
q=q.toFixed(2)

console.log("Slope: " + slope);
//document.getElementById(`slope${WaterContent}`).innerText=`Slope of Above line is ${q}`
// Linear regression function
function linearRegression(x, y) {
var lr = {};
var n = y.length;
var sum_x = 0;
var sum_y = 0;
var sum_xy = 0;
var sum_xx = 0;
var sum_yy = 0;

for (var i = 0; i < y.length; i++) {
sum_x += x[i];
sum_y += y[i];
sum_xy += (x[i] * y[i]);
sum_xx += (x[i] * x[i]);
sum_yy += (y[i] * y[i]);
}

lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
lr['intercept'] = (sum_y - lr.slope * sum_x) / n;
lr['r2'] = Math.pow((n * sum_xy - sum_x * sum_y) / Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)), 2);

return lr;
}
////Slope Calc Cmplted
console.log(x,y)



 
  var thead=['Normal Stress(Kg/Cm2)','Shear Stress(Kg/Cm2)','Pi','Water Content %','Pi From Graph']
 

  var table = "<div class='container mx-auto'> <table class='table table-bordered ' style='margin-top: 25px;'>";
    table+='<thead > <tr>'
  for (var k=0;k<thead.length;k++){
    table+='<th>'+thead[k]+'</th>';
  }
  table+='</thead> </tr> <tbody> '
   
  for (var i = 0; i < x.length; i++) {
    var a=y[i]/x[i];
    var b=Math.atan(a)*180/3.14159265359;
    b=b.toFixed(2)
    table += "<tr>";
        
             table += "<td>" + x[i] + "</td>";
             table += "<td>" + y[i] + "</td>";
             table += "<td>" + b + "</td>";
             table += "<td>" +prop.allvalues[0] + "</td>";
             if(i===0){
             table += "<td rowspan='3' >" +q + "</td>";
             }
    
      
    
    table += "</tr>";
  }
  table += "</tbody></table></div>";
  return(
    <>
     <div dangerouslySetInnerHTML={{ __html: table }} ></div>
    
    </>
  )
}





export default (Table1,Table3, Table2,Table4);