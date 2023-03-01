import { Link } from "react-router-dom";
const Nav=()=>{
  return (
    <>
   <nav className="navbar navbar-inverse mt-2" style={{color:"white"}}>
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <Link to="/" className="navbar-brand">PVV Sir Project</Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar" >
      <ul className="nav navbar-nav" style={{marginLeft:10,}}>
        <li ><Link to="/"> Home</Link></li>
        <li >
       <Link to='/compaction'>   Compaction Test</Link> 
          
        </li>
        <li> <Link to="/">Direct Shear Test</Link></li>
        <li> <Link to="/">Sieve Analysis</Link></li>
        <li> <Link to="/">CBR</Link></li>
        
      </ul>
    
    </div>
  </div>
</nav>
    </>
  ) 
};
export default Nav