import { Link } from "react-router-dom";
import React from 'react';

const Nav=()=>{
  return (
    <>
  


<nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{marginTop:"20px",paddingTop:"10px"}}>
  <div className="container-fluid">
  <Link to="/" className="navbar-brand">PVV Sir Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link"> Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/compaction' className="nav-link">   Compaction Test</Link> 
        </li>
      <li className="nav-item"> <Link to="/direct" className="nav-link" >Direct Shear Test</Link></li>
        
          
        <li className="nav-item">
        <Link to="/sieve" className="nav-link">Sieve Analysis</Link>
        </li>  
         <li className="nav-item">
         <Link to="/cbr" className="nav-link">CBR</Link>
        </li> 
        <li className="nav-item">
         <Link to="#" className="nav-link">Consolidation</Link>
        </li>    
      </ul>
    </div>
  </div>
</nav>
    </>
  ) 
};
export default Nav