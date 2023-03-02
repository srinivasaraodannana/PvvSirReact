import { Table2 } from "../table";
import { Button1 } from "../button";
import Nav from "../nav";

 function Dmixed(){
  var a=[];
  var allvalues=[[4,[0.5,1,2],[0,1.08,1.65]],[8,[0.5,1,2],[0.0,0.39,1.27]],[12,[0.5,1,2],[0.06,1.08,1.38]],[16,[0.5,1,2],[0.28, 0.49,1.85]],[20,[0.5,1,2],[0.46, 0.65,1.67]],[24,[0.5,1,2],[0,0.31,1.43]],[28,[0.5,1,2],[0, 0,0.76]]]

  for(var i=0;i<allvalues.length;i++){
    a.push(allvalues[i][0])
  }
  
  var b=[45.69,40.41,38.56,47.50,39.93,44.34,28.50];






  
  return(
<><Nav/>
<h1 className="text-center">Direct Shear Test Result Of Silico Manganese Slag[Mixed Sample]</h1>
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