import Nav from './nav'
import { Button } from './button';
import { Link } from 'react-router-dom';
import React from 'react';
import { Table5 } from './table';
import { MyChart5 } from './graph';

  
export function Cbr(){
  return (
    <>
    <Nav />
    <h2 style={{color:"black",marginTop:"30px"}}>Load Deformation Test Results :-</h2>
    <hr></hr>
    <Link style={{ textDecoration: 'none' }} to="silicon"><Button name=" Silico Manganese Slag"></Button></Link>
    <Link style={{ textDecoration: 'none' }} to="silico"><Button name="Mixer"></Button></Link>

    <Link style={{ textDecoration: 'none' }} to="fly"> <Button name="Fly Ash"></Button></Link>
    <h5>

    </h5>
    </>
  );
}






export function CbrSil(){
  var watercon=0
  var Load=[2,4,6,8,10,12,14]
  var DeformationL=[6,9,13,15,19,24,28]
  var DeformationU=[0,0,0,0,0,0,0]

  for(var i=0;i<DeformationL.length;i++){
    Load[i]=Load[i]*5*5.3
    DeformationL[i]=DeformationL[i]*0.01
    DeformationU[i]=DeformationU[i]*0.01
  }
  return (
    <>
    <Nav></Nav>
    <h2>CBR silicon</h2>
    <Table5 a={Load} b={DeformationL} />
    <MyChart5 a={Load} b={DeformationL}/>
    </>
  );
}

export default (Cbr,CbrSil);