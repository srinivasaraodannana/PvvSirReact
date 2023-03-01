import Nav from './nav'
import Button from './button';
import { Link } from 'react-router-dom';


function Direct(){

  
  return(
    <> <Nav />
    <h2 style={{color:"black"}}>Direct Shear Test Results :-</h2>
    <hr></hr>
    <div className="dropdown dropdown-menu-end d-grid gap-2 d-md-flex  btn-group-vertical text-center" role="group" style={{width:'80%',}}>
    <button id="btnGroupDrop1" type="button" className="btn btn-lg btn-block btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
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
    
    </>
  )
}
export default Direct