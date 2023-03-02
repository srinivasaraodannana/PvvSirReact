import { Table1 } from "../table";
import MyChart from "../graph";
import Nav from "../nav";
import React from 'react';

function CSilicon(){


  var WtMould2_475=238.5
  var WtMouldSoil2_475=[336,338.5,342.5,336,343.5,344.5,343,343.5]


  var WtMould2_425=240.5
  var WtMouldSoil2_425=[337,338,341,337.5,345,345.5,347.5,347.5]


  var WtMould75_475=238.0
  var WtMouldSoil75_475=[349,352,350.5,344.5,353.5,354.5,356.0,358]


 // var WtCon=[33.41,33.41,34.5,30.10,35.99]
  // var WtConWetSoil=[65.15,65.15,53.80,52.95,65.99]
  // var WtConDrySoil=[65.03,65.03,53.59,52.46,65.17]
   var WaterContent=[0,2,4,6,8,12,14,16];
  var DryDen2_475=[];
  var DryDen2_425=[];
  var DryDen75_475=[];
  for(var i=0;i<WtMouldSoil2_475.length;i++){
  var  b=(WtMouldSoil2_475[i]-WtMould2_475)/98.17;
    b=b.toFixed(2)
    console.log(b)
    var x=(b)/(1+WaterContent[i]*0.01)
     x=x.toFixed(2)
     DryDen2_475.push(x)
  }
  for( i=0;i<WtMouldSoil2_425.length;i++){
    b=(WtMouldSoil2_425[i]-WtMould2_425)/98.17;
    b=b.toFixed(2)
    console.log(b)
     x=(b)/(1+WaterContent[i]*0.01)
     x=x.toFixed(2)
     DryDen2_425.push(x)
  }
  for( i=0;i<WtMouldSoil75_475.length;i++){
    b=(WtMouldSoil75_475[i]-WtMould75_475)/98.17;
    b=b.toFixed(2)
    console.log(b)
     x=(b)/(1+WaterContent[i]*0.01)
     x=x.toFixed(2)
     DryDen75_475.push(x)
  }




var arr=[['Water Content', '4.75mm-2mm', '2mm-425μ','475μ-75μ'],]
 for( i=0;i<WaterContent.length;i++){
  arr.push([parseFloat(WaterContent[i]),parseFloat(DryDen2_475[i]),parseFloat(DryDen2_425[i]),parseFloat(DryDen75_475[i]),])
 }
console.log(arr)
  return(
    <>
<Nav></Nav>
    <h1 className="text-center">Compaction Test Result Of Silico Manganese Slag</h1>
    <hr></hr>
     <Table1 ar={arr}></Table1>
     <MyChart ar={arr}></MyChart>

        
    </>
  );
}
export default CSilicon

