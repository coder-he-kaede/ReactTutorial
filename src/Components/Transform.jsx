import React,{useState} from 'react'
import Childprop from './Childprop';
function Transform(props) {

   const [text, settext] = useState("Default text");
   const handlechange = (event)=>{
    console.log(event.target.value)
    settext(event.target.value);
   }
   const changetouppercase = ()=>{
    let newword = text.toUpperCase();
    settext(newword);
    props.Showalert("Transform to Uppercase","success");
    
   }

   const removeSpace = ()=>{
    let newword = text.replace(/ /g,"a");
    settext(newword);
   }
  return (
    <div>
       <h1>Enter text</h1>
       <div className='mb-3'>
     
        <textarea className='form-control' value={text} rows='8' onChange={handlechange}></textarea>
       </div>
       <button type="button" className="btn btn-success" onClick={changetouppercase}>TRansform into uppercase</button>
       <button type="button" className="btn btn-success" onClick={removeSpace}>Remove Space</button>
       <button type="button" className="btn btn-success" onClick={removeSpace}>Extra Space Remove</button>
       <div className="mb-3">
        <h3>Preview</h3>
        <strong>{text.split(" ").length} words & Characters {text.length}</strong>
        {console.log(text.split(" "))}
        <p>{text}</p>
       </div>
       {/* <Childprop content = {text}/> */}
    </div>
  )
}
export default Transform