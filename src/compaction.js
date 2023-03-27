import Nav from './nav'
import { Button } from './button';
import { Link } from 'react-router-dom';
import React from 'react';



function Compaction(){
  return (
    <>
    <Nav />
    <h2 style={{color:"black",marginTop:"30px"}}>Compaction Test Results :-</h2>
    <hr></hr>
    <Link style={{ textDecoration: 'none' }} to="silico"><Button name=" Silico Manganese Slag"></Button></Link>
    <Link style={{ textDecoration: 'none' }} to="crusher"> <Button name="Crusher Dust"></Button></Link>
    <Link style={{ textDecoration: 'none' }} to="iron"> <Button name="Iron Ore"></Button></Link>
    <Link style={{ textDecoration: 'none' }} to="fly"> <Button name="Fly Ash"></Button></Link>
    <h5>


    <h3><b>Apparatus :-</b></h3>
1. A cylindrical metal mould of capacity 1000 cm3
, with an internal diameter of 100 mm
and an internal affective height of 127.3 mm. The mould is fitted with a detachable
base plate and a removable extension collar approximately 60 mm high.<br/>
2. A metal rammer of 50 mm diameter with a circular face and mass 2.6 kg with a free
fall of 310 mm.<br/>
3. A steel straight edge about 30 cm in length and with one beveled edge.<br/>
4. 4.75 mm I.S. sieve<br/>
5. Balance – (a) with a capacity of 10 kg and accuracy of 1 g
(b) with a capacity of 200 g and accuracy of 0.01 g<br/>
6. Thermostatically controlled hot air oven.<br/>
7. Airtight and non-corrodible containers for water content determination<br/>
8. Mixing tools like tray, trowel and spatula.<br/>
<h3><b>Procedure :-</b></h3>
1. Measure the inner diameter and inner height of the cylindrical mould and hence,
calculate the volume of the mould. Compare them with standard values.<br/>
2. Take about 3 kg of air dried soil passing 4.75mm IS sieve and mix it with a suitable
amount of water depending on the soil type (For sandy and gravelly soils, an initial
moisture content of 4 to 6% and for cohesive soils, an initial moisture content of (wp- 10)% to (wp-8)% would be suitable, where wp is the plastic limit of the soil). Keep
the soil in a sealed container for saturation for a minimum period of about 16 hrs.<br/>
3. Clean the mould with the base plate and record its mass. Attach the collar to the
mould. Place it on a solid base such as concrete floor.<br/>
4. Remix the soil thoroughly. Compact the moist soil in to the mould, with the collar
attached, in three equal layers, each layer being given 25 blows from a 2.6 kg rammer
dropped from a height to 310mm above the soil surface. The blows should be
uniformly distributed over the surface of each layer. The surface of each layer of the
compacted soil shall be roughened with a spatula before laying the next layers. The
final layer shall project not more than 6 mm above the top of the mould after the
collar is removed.<br/>
5. Remove the collar and level off the compacted soil surface to the top of the mould
carefully. Then, record the mass of the mould with the base plate and compacted soil.<br/>
6. Remove the compacted soil specimen from the mould and place it on the mixing tray.
Keep a representative soil sample of the specimen for water content determination.<br/>
7. Mix the remaining soil with the reminder of the originally mixed soil in the tray. Add
water in suitable increments to the soil sample and mix the soil thoroughly and repeat
the above procedure.<br/>
8. Conduct a minimum of 5 determinations such that the optimum moisture content lies
within this range.<br/>
9. Plot the Indian Standard light compaction curve (w % along x-axis and d along y- axis). Obtain OMC and d max from the plotted curve. Plot also the ZAV line.<br/>
    </h5>
    </>
  );
}


export default Compaction