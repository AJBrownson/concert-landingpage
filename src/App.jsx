import React from 'react'
import Logo from './assets/Logo.png'
import T10 from './assets/Ticket.jpg'
import T150 from './assets/Ticket150k.jpg'
import T50 from './assets/Ticket50k.png'
import T300 from './assets/Ticket300k.jpg'
import "./App.css";



function App() {

  return (
    <>
      <div className='logo-wrapper'>
        <img src={Logo} alt='' />
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <a href='https://paystack.com/pay/only-me' target='_blank'>
            <img src={T10} alt='' />
          </a>
          <a href='https://paystack.com/pay/me-n-my-girl' target='_blank'>
            <img src={T50} alt='' />
          </a>
          <a href='https://paystack.com/pay/me-n-my-guys' target='_blank'>
            <img src={T150} alt='' />
          </a>
          <a href='https://paystack.com/pay/we-plenty' target='_blank'>
            <img src={T300} alt='' />
          </a>
        </div>
      </div>
      <p>Tap on a ticket to buy</p>
    </>
  )
}

export default App
