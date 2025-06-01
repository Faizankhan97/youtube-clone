import React from 'react'
import Youtube from "../assets/youtube.jpg"
import Humburger from "../assets/humburger_icon.png"

const Header = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex'>
        <img src={Humburger} alt="" className='h-8' />
        <img src={Youtube} alt="" className='h-8' />
      </div>
      <div>
        <input type="text" />
        <button type='button'>Search</button>
      </div>
      <div></div>
    </div>
  )
}

export default Header