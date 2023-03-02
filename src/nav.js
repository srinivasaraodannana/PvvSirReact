import { Link } from "react-router-dom";
import React from 'react';

const Nav=()=>{
  return (
    <>
  


<nav class="navbar navbar-expand-sm bg-dark navbar-dark" style={{marginTop:"20px",paddingTop:"10px"}}>
  <div class="container-fluid">
  <Link to="/" className="navbar-brand">PVV Sir Project</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
      <li class="nav-item">
        <Link to="/" class="nav-link"> Home</Link>
        </li>
        <li class="nav-item">
        <Link to='/compaction' class="nav-link">   Compaction Test</Link> 
        </li>
      <li class="nav-item"> <Link to="/direct" class="nav-link" >Direct Shear Test</Link></li>
        
          
        <li class="nav-item">
        <Link to="/sieve" class="nav-link">Sieve Analysis</Link>
        </li>  
         <li class="nav-item">
         <Link to="#" class="nav-link">CBR</Link>
        </li>    
      </ul>
    </div>
  </div>
</nav>
    </>
  ) 
};
export default Nav