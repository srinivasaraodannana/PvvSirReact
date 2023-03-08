import { Table1 } from "../table";
import {MyChart} from "../graph";
import Nav from "../nav";
import React from 'react';



function Ciron(){
  var WtMould2_475=240.5
  var WtMouldSoil2_475=[406,412,408,404.5]
  var WtMould2=238.5
  var WtMouldSoil2=[395,400,399.5,397.5]
  var WtMould10_475=238.5
  var WtMouldSoil10_475=[412.5,419,418,415]
  var WtMould475=240.5
  var WtMouldSoil475=[409.5,413,411.5,408]

   var WaterContent=[0,2,4,6];
  var DryDen2_475=[];
  var DryDen2=[];
  var DryDen10_475=[];
  var DryDen475=[];
  for(var i=0;i<WaterContent.length;i++){
  var  b=(WtMouldSoil2_475[i]-WtMould2_475)/98.17;
    b=b.toFixed(2)
    console.log(b)
    var  x=(b)/(1+WaterContent[i]*0.01)
     x=x.toFixed(2)
     DryDen2_475.push(x)
  }
  for( i=0;i<WaterContent.length;i++){
    b=(WtMouldSoil2[i]-WtMould2)/98.17;
    b=b.toFixed(2)
    console.log(b)
     x=(b)/(1+WaterContent[i]*0.01)
     x=x.toFixed(2)
     DryDen2.push(x)
  }
  for(i=0;i<WaterContent.length;i++){
    b=(WtMouldSoil10_475[i]-WtMould10_475)/98.17;
    b=b.toFixed(2)
    console.log(b)
     x=(b)/(1+WaterContent[i]*0.01)
     x=x.toFixed(2)
     DryDen10_475.push(x)
  }
  for( i=0;i<WaterContent.length;i++){
    b=(WtMouldSoil475[i]-WtMould475)/98.17;
    b=b.toFixed(2)
    console.log(b)
     x=(b)/(1+WaterContent[i]*0.01)
     x=x.toFixed(2)
     DryDen475.push(x)
  }



  var arr=[['Water Content', '2mm-4.75mm', '2mm passing','10mm-4.75mm','4.75mm-Pan'],]
 for( i=0;i<WaterContent.length;i++){
  arr.push([parseFloat(WaterContent[i]),parseFloat(DryDen2_475[i]),parseFloat(DryDen2[i]),parseFloat(DryDen10_475[i]),parseFloat(DryDen475[i])])
 }

  return(
<>
<Nav></Nav>
<h1 className="text-center" style={{marginTop:"30px"}}>Compaction Test Result Of Iron Ore</h1>
    <hr></hr>
     <Table1 ar={arr}></Table1>
     <MyChart ar={arr}></MyChart>

</>
  );
}
export default Ciron