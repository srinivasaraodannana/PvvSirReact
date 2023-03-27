

import Nav from "../nav";
import React from 'react';
import { MyChart4 } from "../graph";
import { Table4 } from "../table";
 function DiAsh(){

  var allvalues=[20,[0.5 , 1, 2],[0.16, 0.47, 1.30]]

  
 
  return(
<><Nav/>

<h1 className="text-center">Direct Shear Test Result Of Fly Ash</h1>
<hr/>
<Table4 allvalues={allvalues}></Table4>
<MyChart4 allvalues={allvalues}/>

</>
  );
}
function DiOre(){
 
  return(
<><Nav/>

<h1 className="text-center">Direct Shear Test Result Of Fly Ash</h1>
<hr/>

</>
  );
}
export { DiAsh,DiOre}