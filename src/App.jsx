import React from 'react'
import T10 from './assets/Ticket10k.jpg'
import T15 from './assets/Ticket150k.jpg'
import "./App.css";



function App() {

  return (
    <>
      <img src='https://homeandawayfoods.com/Frontend/assets/img/logo/logo2.2.png' className='logo'/>
      <div className='wrapper'>
        <div className='card'>
          <a href='https://paystack.com/pay/only-me' target="_blank"> <img src={T10} alt='Thursday Throwback concert ticket for singles' /> </a>
        </div>

        <div className='card'>
        <a href='https://paystack.com/pay/me-n-my-guys' target="_blank"> <img src={T15} alt='Thursday Throwback concert ticket for me and my guys' /> </a>
        </div>
      </div>
    </>
  )
}

export default App
