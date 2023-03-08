import { Table2 } from "../table";
import {MyChart3} from "../graph";
import Nav from "../nav";
import React from 'react';



function Ccrusher(){
  var a=[1.44,3.13,5.48,6.53,7.56,10.43,12.2,15.04];//add 13.75 last
  var b=[1.84,1.90,1.77,1.72,1.831,1.89,1.94,1.93]; // add 1.91

  return(
<>
<Nav></Nav>
<h1 className="text-center" style={{marginTop:"30px"}}>Compaction Test Result Of Crusher Dust</h1>
    <hr></hr>
    <Table2 a={a} b={b}/>
<MyChart3 a={a} b={b}/>

</>
  );
}

export default Ccrusher