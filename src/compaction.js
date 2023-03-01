import Nav from './nav'
import Button from './button';
import { Link } from 'react-router-dom';
function Compaction(){
  return (
    <>
    <Nav />
    <h2 style={{color:"black"}}>Compaction Test Results :-</h2>
    <hr></hr>
    <Link style={{ textDecoration: 'none' }} to="silico"><Button name=" Silico Manganese Slag"></Button></Link>
    <Link style={{ textDecoration: 'none' }} to="crusher"> <Button name="Crusher Dust"></Button></Link>
    <Link style={{ textDecoration: 'none' }} to="iron"> <Button name="Iron Ore"></Button></Link>
    
    </>
  );
}
export default Compaction