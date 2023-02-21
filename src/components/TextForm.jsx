import React, { useState } from 'react'
import Alert from './Alert';
export default function TextForm(props) {
  const [text,setText] = useState("");
  const [warn,setwarning] = useState("");
  const [type,settype] = useState("")
  const handleUpclick = ()=>{
    console.log('request to change to upper case');
    let newText = text.toUpperCase();
    if(newText!==text){
      setText(newText);
    }
    else {
      setwarning("⚠️already in upper case")
      settype("warning")
      setTimeout(() => {
        settype("");
        setwarning("");
      }, 1500);
    }
   
  }
  const handleLoclick = ()=>{
    console.log('request to change to lower case');
    let newtext = text.toLowerCase();
    if(newtext!==text){
      setText(newtext);
    }
    else {
      setwarning("⚠️already in lower case")
      settype("warning")
      setTimeout(() => {
        settype("");
        setwarning("");
      }, 1500);
    }

  }
  const clearOnclick = ()=>{
    console.log('request to change to clear text');
    
    if(text!==""){
      setText("");
    }
    else {
      setwarning("⚠️add text first")
      settype("warning")
      setTimeout(() => {
        settype("");
        setwarning("");
      }, 1500);
    }

  }

  const copyOnclick = ()=>{
    navigator.clipboard.writeText(text);
    setwarning("✅copied");
    settype("success");
    setTimeout(() => {
      settype("");
      setwarning("");
    }, 1500);
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    setwarning("✅ extra spaces hadled")
    settype("success")
    setTimeout(() => {
      settype("");
      setwarning("");
    }, 1500);
  }
    
  const handleOnchange=(event)=>{
    setText(event.target.value);
    console.log(text)
  }

  

  return (
    <div>
        <Alert warn = {warn} type = {type}/>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <div className='container my-2'  >
              <textarea name="forms" className="form-control" style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnchange} cols="30" rows="10"></textarea>
              <button className={`btn btn-${props.theme} mx-2 my-2`} onClick={handleUpclick} >Change to upper case</button>
              <button className={`btn btn-${props.theme} mx-2 my-2`} onClick={handleLoclick} >Change to lower case</button>
              <button className={`btn btn-${props.theme} mx-2 my-2`} onClick={clearOnclick} >clear</button>
              <button className={`btn btn-${props.theme} mx-2 my-2`} onClick={copyOnclick} >copy</button>
              <button className={`btn btn-${props.theme} mx-2 my-2`} onClick={handleExtraSpaces} >handle extra spaces</button>
            </div>
        </div>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} chracters</p> {/* split function splits the string like in python */}
          <p>{text.split(" ").length * 0.008} minutes to read</p> {/** this 0.08  we got from google average time taken by a person to read a word */}
          <h4>preview</h4>
          <p>{text}</p>
        </div>
    </div>
  )
}
