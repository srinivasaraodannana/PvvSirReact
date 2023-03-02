import { Table2 } from "../table";
import { Button1 } from "../button";
import Nav from "../nav";

 function Dmixed(){
  var a=[];
  var allvalues=[[4,[0.5,1,2],[0, 0.075,0.9]],[8,[0.5,1,2],[0, 0.15,0.93]],[12,[0.5,1,2],[0, 0.54,1.04]],[16,[0.5,1,2],[0, 0,0.76]]]

  for(var i=0;i<allvalues.length;i++){
    a.push(allvalues[i][0])
  }
  
  var b=[32.30,32.74,33.65,28.50];






  
  return(
<><Nav/>
<h1 className="text-center">Direct Shear Test Result Of Silico Manganese Slag[425μ-75μ]</h1>
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