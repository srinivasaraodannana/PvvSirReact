import { Table2 } from "../table";



 function Dmixed(){
  var a=[4,8,12,16,20,24,28];
  var b=[45.69,40.41,38.56,47.50,39.93,44.34,28.50];
  
  return(
<>
<h1 className="text-center">Direct Shear Test Result Of Silico Manganese Slag[Mixed Sample]</h1>
<hr/>
<Table2 a={a} b={b}></Table2>



</>
  );
}
export default Dmixed