import { Table3 } from "../table";
import React from 'react';




export function Ssilico(){

  const sieve_size = [10,4.75,2.36,1.18,0.6,0.3,0.15,0.075]; // in mm
   const weight_retained = [4, 18.5, 71, 154.5, 155.9, 60.5, 20.0, 15.6];
  return (
    <>
    <h1 className="text-center">Sieve Analysis Test Result Of Silico Manganese Slag</h1>
<hr/>
    <Table3 sieve_size={sieve_size} weight_retained={weight_retained}/>
    </>
  )
}



export function Siron(){
  const sieve_size = [4.75,2.36,2.0,1.18,0.6,0.425,0.3,0.15,0.075]; // in mm
  const weight_retained = [0,541.0,184.5,194.0,65.0,5.5,2.5,2.5,5.0];
  return (
    <>
    <h1 className="text-center">Sieve Analysis Test Result Of Iron Ore Slag</h1>
<hr/>
    <Table3 sieve_size={sieve_size} weight_retained={weight_retained}/>
    </>
  )
}
export function Scrusher(){
  const sieve_size = [10,4.75,2.36,1.18,0.6,0.3,0.15,0.075]; // in mm
    const weight_retained = [0,19.0,56.5,66.9,60.5,77.5,100.5,86.5];
  return (
    <>
    <h1 className="text-center">Sieve Analysis Test Result Of Iron Ore Slag</h1>
<hr/>
    <Table3 sieve_size={sieve_size} weight_retained={weight_retained}/>
    </>
  )
}


export default (Ssilico,Siron,Scrusher);

 

