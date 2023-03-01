import React from 'react';
import './index.css';



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
  return(
    <>
    
    <div dangerouslySetInnerHTML={{ __html: table }}></div>
    
    
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





export default (Table1,Table3, Table2);