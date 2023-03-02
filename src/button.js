import './App.css';
import { Table4 } from './table';

function alt(){
  alert("This experiment not yet done")
}
function abc(){
  console.log("Button enabled")
}
export function Button(prop) {
  console.log(prop.status)
  var a="btn  btn-lg btn-outline-dark";
  var b=abc
  if (prop.status === "btn-outline-danger"){
    a="btn  btn-lg btn-outline-danger"
    b=alt
   
  }

  return (
    <>
      <div className="d-grid gap-2 d-md-flex  btn-group-vertical" id="button-container">
      <button type="button" className={a} style={{ marginTop:"20px" }} aria-disabled={b} onClick={b}>
        {prop.name}
        </button>
       
      </div>
    </>
  );
}


export function Button1(prop){
  var x= prop.allvalues[0].toString();
  return(
    <>
      <div className="d-grid gap-2 d-md-flex  btn-group-vertical" id="button-container" style={{marginTop:'20px'}}>
        <button type="button" className="btn  btn-lg btn-outline-warning" data-bs-toggle="collapse" data-bs-target={"#water" + x} style={{marginTop:'20px'}} >{x}% Water Content</button>
        <div id={"water"+x} className="collapse">
          <Table4 allvalues={prop.allvalues}/>
        </div>
      </div>
    </>
  );
}
 

export default (Button,Button1);