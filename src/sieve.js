import Nav from './nav'
import  { Button } from './button';
import { Link } from 'react-router-dom';
import React from 'react';


function Sieve(){
  return (
    <>
    <Nav />
    <h2 style={{color:"black",marginTop:"30px"}}>Sieve Analysis Test Results :-</h2>
    <hr></hr>
    <Link style={{ textDecoration: 'none' }} to="silico"><Button name=" Silico Manganese Slag"></Button></Link>
    <Link style={{ textDecoration: 'none' }} to="crusher"> <Button name="Crusher Dust"></Button></Link>
    <Link style={{ textDecoration: 'none' }} to="iron"> <Button name="Iron Ore"></Button></Link>
    <br/>
    <br/>
    <br/><br/>
    <h5>


   <h3><b> Apparatus :-</b></h3><br/>
1. Set of IS sieves: 4.75mm, 2mm, 1mm, 600 micron, 425 micron, 300 micron, 212
micron, 150 micron, 106 micron, 75 micron.<br/>
2. Brushes to clean the sieves<br/>
3. Mechanical sieve shaker<br/>
4. Balance<br/>
5. Trays<br/>
6. Thermostatically controlled hot air oven<br/><br/>
<h3><b>Procedure :-</b></h3><br/>
1. Oven dry the given soil sample passing 4.75 mm IS sieve.<br/>
2. Take 1000 g of oven dried soil sample. Mix the sample with distilled water to form a
slurry and allow it for soaking.<br/>
3. Wash the soaked soil sample through 75 micron sieve until the water passing through
the sieve is substantially clear.<br/>
4. Dry the fraction of the soil retained on 75 micron sieve in oven.<br/>
5. Arrange the remaining sieves one above the other such that 2mm sieve is at the top
and 75 micron sieve is at the bottom. Place a cover at the top and receiver at the
bottom.<br/>
6. Fix the set of sieves to the mechanical sieve shaker. Operate the sieve shaker for a
minimum of 10 minutes.<br/>
7. Carefully collect and record the mass of the soil fraction retained on each sieve and
also in the receiver.<br/>
8. Calculate the cumulative mass of soil fraction retained on each sieve. Calculate the
percentage finer.<br/>
9. Plot a graph of percentage finer (along y-axis) Vs equivalent particle diameter in mm
(along x-axis in log scale). Draw a smooth curve encompassing the plotted points.
10. Record the values of percentage sand, percentage silt and percentage clay size
fractions from the graph.<br/>
11. Record D<sub>10</sub>, D<sub>30</sub> and D<sub>60</sub> from the graph.<br/>
12. Calculate coefficient of curvature (C<sub>C</sub>) and coefficient of uniformity (C<sub>U</sub>).<br/>
13. Classify the soil based on gradation.<br/>
    </h5>




    </>
   
  )
}
export default Sieve;