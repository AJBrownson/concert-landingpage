import React from 'react'
import Flip from './assets/Flipside.png'
import Home from './assets/Home.png'
import T10 from './assets/Ticket.jpg'
import T15 from './assets/Ticket150k.jpg'
import "./App.css";



function App() {

  return (
    <>
      <div className='logo-wrapper'>
        <img src={Home} alt='' className='home' />
        {/* <p>&</p> */}
        <img src={Flip} alt='' className='flip' />
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <a href='https://paystack.com/pay/only-me' target='_blank'>
            <img src={T10} alt='' />
          </a>
          <a href='https://paystack.com/pay/me-n-my-guys' target='_blank'>
            <img src={T15} alt='' />
          </a>
          <a href='https://paystack.com/pay/only-me' target='_blank'>
            <img src={T10} alt='' />
          </a>
          <a href='https://paystack.com/pay/me-n-my-guys' target='_blank'>
            <img src={T15} alt='' />
          </a>
        </div>
      </div>
      <p>Tap on any of the tickets to buy</p>
    </>
  )
}

export default App
