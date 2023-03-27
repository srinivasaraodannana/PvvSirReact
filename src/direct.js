import Nav from './nav'
import {Button} from './button';
import { Link } from 'react-router-dom';
import React from 'react';

function Direct(){

  
  return(
    <> <Nav />
    <h2 style={{color:"black",marginTop:"30px"}}>Direct Shear Test Results :-</h2>
    <hr></hr>
    <div className="dropdown dropdown-menu-end d-grid gap-2 d-md-flex  btn-group-vertical text-center" role="group" style={{width:'80%',}}>
    <button id="btnGroupDrop1" type="button" className="btn btn-lg btn-block btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Silico Manganese Slag
    </button>
    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <Link style={{ textDecoration: 'none' }} to='mixed'><li className='dropdown-item'>Mixed Sample</li></Link>
      <Link style={{ textDecoration: 'none' }} to='D4752'> <li  className='dropdown-item'>4.75mm-2mm</li></Link>
      <Link style={{ textDecoration: 'none' }} to='D2425'> <li className='dropdown-item'>2mm-425μ</li></Link>
      <Link style={{ textDecoration: 'none' }} to='D42575'> <li className='dropdown-item'>425μ-75μ</li></Link>
    </ul>
  </div>
    <Link style={{ textDecoration: 'none' }} to="#" > <Button name="Crusher Dust" status='btn-outline-danger'></Button></Link>
     <Link style={{ textDecoration: 'none' }} to="#"> <Button name="Iron Ore" status='btn-outline-danger'>
      </Button></Link>
      <Link style={{ textDecoration: 'none' }} to="flyash"> <Button name="Fly Ash" status='btn-outline-dark'>
      </Button></Link>
    


      <h5>


<h3><b>Apparatus :-</b></h3>
1. Shear box assembly consisting of<br/>
&emsp;&emsp;o Upper and lower parts of shear box coupled together with two pins or
clamping screws.<br/>
&emsp;&emsp;o Container for shear box<br/>
&emsp;&emsp;o Grid plates – two pairs<br/>
&emsp;&emsp;o Base plate with cross grooves on its top face to fit into the shear box.<br/>
&emsp;&emsp;o Loading pad with a steel ball on its top which distributes the load over the
specimen, normal to the shear plane.<br/>
2. Loading frame<br/>
3. Calibrated weights<br/>
4. Proving ring with dial gauge to measure shear force<br/>
5. Balance with weights.<br/>
6. Dial gauge<br/>
7. Spatula, straight edge, sample trimmer.<br/>
Preparation of the specimen<br/>
Remoulded specimens: Cohesive soils may be compacted to the required density and
moisture content in a separate mould. The sample is extracted and trimmed to the
required size.<br/>
OR<br/>
The soil may be compacted to the required density and moisture content directly
into the shear box after fixing the two halves of the shear box together by means of fixing
screws.
<h3><b>Procedure :-</b></h3>
1. Assemble the shear box with the base plate at the bottom and a grid plate over it, the
two halves of the box being connected by the locking screws. The serrations of the
grid plate should be at right angles to the direction of shear.<br/>
2. Place the specimen over the bottom grid plate. Place another grid plate at the top of
the specimen such that the serrations of the plate or in contact with the specimen and
at right angles to the direction of shear. Place the loading pad on the top of the grid
plate<br/>
3. Place the shear box inside the container of the shear box. The container can move
over roller supports at its bottom.<br/>
4. Set the lower part of the shear box to bear against the load jack, the upper part of the
box against the proving ring. Set the gauge of the proving ring to read zero.<br/>
5. Apply the required normal stress on the specimen inside the shear box through a lever
arrangement.<br/>
6. Remove the locking screws or pins so that both the parts of the shear box are free to
move relative to each other.<br/>
7. Conduct the test by applying a horizontal shear load to failure or to 20% longitudinal
displacement, whichever occurs first. Take the proving ring dial readings
corresponding to known displacement dial readings.<br/>
8. At the end of the test, remove the specimen from the box and determine its final water
content (for cohesive soil only).<br/>
9. Repeat the test on identical specimens, under different normal stresses ( 0.5 kgf/cm2
, 1 kgf/cm2

,and 2 kgf/cm2). A minimum of
three (preferably four) tests shall be made on separate specimens of the same density.<br/>




</h5>
    </>
  )
}
export default Direct