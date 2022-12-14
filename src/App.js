import React, {useState}  from "react"
import Header from "./components/header"
import Meme from "./components/Meme"

// import WindowTracker from "./components/windowTracker";

function App() {
  const [mode, setMode] = React.useState(true)
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
     <Header mode={mode} toggleMode={toggleMode}/>
     <Meme mode={mode} />
     {/* {show && <WindowTracker />} */}
   
    </div>
  );
}

export default App;
