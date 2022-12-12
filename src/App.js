import React from "react"
import Header from "./components/header"
import Meme from "./components/Meme"
// import WindowTracker from "./components/windowTracker";

function App() {
  return (
    <div>
     <Header />
     <Meme />
     {/* {show && <WindowTracker />} */}
    </div>
  );
}

export default App;
