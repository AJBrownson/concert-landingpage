import React from 'react'
import Flipside from './assets/Flipside.png'
import Home from './assets/Home.png'
import T10 from './assets/Ticket.jpg'
import T15 from './assets/Ticket150k.jpg'
import "./App.css";



function App() {

  return (
    <>
      <div>
        <div className='card'>
          <img src={T10} alt='' />
          <img src={T15} alt='' />
          <img src={T10} alt='' />
          <img src={T15} alt='' />
        </div>
      </div>
    </>
  )
}

export default App
