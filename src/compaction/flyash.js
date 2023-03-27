import { Table1 } from "../table";
import {MyChart} from "../graph";
import Nav from "../nav";
import React from 'react';

function Cfly(){


  var WtMould=1792
  var WtMouldSoil=[3166,3260,3288,3259]


   var WaterContent=[15,20,25,28];
  var DryDen=[];

  for(var i=0;i<WtMouldSoil.length;i++){
  var  b=(WtMouldSoil[i]-WtMould)/1000;
    b=b.toFixed(2)
    console.log(b)
    var x=(b)/(1+WaterContent[i]*0.01)
     x=x.toFixed(2)
     DryDen.push(x)
  }
  





var arr=[['Water Content', 'Mixed Sample'],]
 for( i=0;i<WaterContent.length;i++){
  arr.push([parseFloat(WaterContent[i]),parseFloat(DryDen[i]),])
 }
console.log(arr)
  return(
    <>
<Nav></Nav>
    <h1 className="text-center">Compaction Test Result Of Fly Ash</h1>
    <hr></hr>
     <Table1 ar={arr}></Table1>
     <MyChart ar={arr}></MyChart>

        
    </>
  );
}
export default Cfly

