import { Table2 } from "../table";
import { Button1 } from "../button";
import Nav from "../nav";

 function Dmixed(){
  var a=[];
  var allvalues=[[4,[0.5,1,2],[0.044,0.4,1.5]],[8,[0.5,1,2],[0.019,1.037,1.862]],[12,[0.5,1,2],[0.52,1.24,1.96]],[16,[0.5,1,2],[0.64,1.373,1.96]],[20,[0.5,1,2],[0.686,1.295,1.96]]]
  for(var i=0;i<allvalues.length;i++){
    a.push(allvalues[i][0])
  }
  
  var b=[44.69,49.50,42.79,39.97,39.45];






  
  return(
<><Nav/>
<h1 className="text-center">Direct Shear Test Result Of Silico Manganese Slag[4.75mm-2mm]</h1>
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