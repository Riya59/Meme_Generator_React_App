import React from 'react'
import "../style.css"

export default function header() {
  return (
    <header className='header'>
        <img className ="header--image" src="../images/troll-face.jpg" alt="Face"/>
        <h2 className='header--title'>Meme Generator</h2>
        <h4 className='header--project'>React Course - Project3</h4>
    </header>
  )
}
