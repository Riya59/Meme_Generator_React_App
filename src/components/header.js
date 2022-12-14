import React from 'react'
import "../style.css"


export default function header(props) {
 
  
  return (
    
    <header id='header'  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      
        <img className ="header--image" src="../images/troll-face.jpg" alt="Face"/>
        <h2 className='header--title'>Meme Generator</h2>
       
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          
        </div>
        
       

        
    </header>
   
  )
}
