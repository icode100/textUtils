import React, { useState } from 'react';
import './index.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import TextForms from './components/TextForm';
// import About from './components/About';
export default function App() {
  const[mode,setmode] = useState('dark');
  const [theme,settheme] = useState(mode)
  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      if(theme==="warning"){
        document.body.style.backgroundColor = '#4d4d00';
        document.body.style.color = 'white';
        
      }
      else if(theme==="success"){
        document.body.style.backgroundColor = '#003300';
        document.body.style.color = 'white';
        
      }
      if(theme==="primary"){
        document.body.style.backgroundColor = '#00004d';
        document.body.style.color = 'white';
        settheme("primary");
      }
      if(theme==="danger"){
        document.body.style.backgroundColor = '#4d0000';
        document.body.style.color = 'white';
        
      }
      
    }
    else{
      setmode('light');
      document.body.style.color = 'black';
      if(theme==='danger'){
        document.body.style.backgroundColor = '#ff8080';
      }
      else if(theme==='warning'){
        document.body.style.backgroundColor = '#ffff4d';
      }
      else if(theme==='success'){
        document.body.style.backgroundColor = '#aaff80';
      }
      else if(theme==='primary'){
        document.body.style.backgroundColor = '#80d4ff';
      }
        
      
    }
  }
  
  // Get a reference to the radio button set
const radioBtns = document.getElementsByName('btnradio');
radioBtns.forEach((element) => {
  element.addEventListener('click', () => {
    // Check if the radio button is checked
    if (element.checked) {
      // Get the value of the checked radio button
      
      if(mode==='dark'){
        if(element.value==="yellow"){
          document.body.style.backgroundColor = '#4d4d00';
          document.body.style.color = 'white';
          settheme("warning");
        }
        else if(element.value==="green"){
          document.body.style.backgroundColor = '#003300';
          document.body.style.color = 'white';
          settheme("success");
        }
        if(element.value==="blue"){
          document.body.style.backgroundColor = '#00004d';
          document.body.style.color = 'white';
          settheme("primary");
        }
        if(element.value==="red"){
          document.body.style.backgroundColor = '#4d0000';
          document.body.style.color = 'white';
          settheme("danger");
        }
      }
      else{
        if(element.value==="yellow"){
          document.body.style.backgroundColor = '#ffff4d';
          document.body.style.color = 'black';
          settheme("warning");
        }
        else if(element.value==="green"){
          document.body.style.backgroundColor = '#aaff80';
          document.body.style.color = 'black';
          settheme("success");
        }
        if(element.value==="blue"){
          document.body.style.backgroundColor = '#80d4ff';
          document.body.style.color = 'black';
          settheme("primary");
        }
        if(element.value==="red"){
          document.body.style.backgroundColor = '#ff8080';
          document.body.style.color = 'black';
          settheme("danger");
        }
      }
      
    }
  });
});

return (
  <>
    <Navbar mode = {mode} title="text utils" togglemode = {togglemode}/>
    <TextForms theme = {theme} mode = {mode} heading="enter your text to analyze"/>
  </>
);
}


    