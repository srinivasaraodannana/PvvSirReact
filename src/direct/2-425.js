import { Table2 } from "../table";
import { Button1 } from "../button";
import Nav from "../nav";
import React from 'react';

 function Dmixed(){
  var a=[];
  var allvalues=[[4,[0.5,1,2],[0.4,0.82,1.07]],[8,[0.5,1,2],[0.43,0.89,1.65]],[12,[0.5,1,2],[0.517,0.842,1.647]],[16,[0.5,1,2],[0.587, 1.056,1.76]],[20,[0.5,1,2],[0.0872,0.225, 0.438]]]

  for(var i=0;i<allvalues.length;i++){
    a.push(allvalues[i][0])
  }
  
  var b=[22.71,38.86,37.26,37.63,13.0];






  
  return(
<>
<Nav/>
<h1 className="text-center">Direct Shear Test Result Of Silico Manganese Slag[2mm-425μ]</h1>
<hr/>
<Table2 a={a} b={b}></Table2>
{
  allvalues.map(
    (u)=>{
      return <Button1 allvalues={u} className={{marginTop:'20px'}}/>
    }
  )
}




</>
  );
}
export default Dmixed