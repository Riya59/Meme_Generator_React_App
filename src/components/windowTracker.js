// import React from 'react'
// import { useState,useEffect } from 'react'

// export default function windowTracker() {
//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
//     React.useEffect(()=>{
//         function watchWidth(){
//             console.log("")
//             setWindowWidth(window.innerWidth)
//         }
//         window.addEventListener("resize",watchWidth)
//         return function(){
//             window.removeEventListener("resize",watchWidth)
//         }
//     }, [])
//   return (
//     <h1>{windowWidth}</h1>
//   )
// }
