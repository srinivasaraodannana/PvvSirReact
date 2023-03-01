import './App.css';


function alt(){
  alert("This experiment not yet done")
}
function abc(){
  console.log("Button enabled")
}
function Button(prop) {
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
 

export default Button;