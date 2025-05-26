import React from 'react'
import Youtube from "../assets/youtube.jpg"
import Humburger from "../assets/humburger_icon.png"

const Header = () => {
  return (
    <div>
      <div>
        <img src={Humburger} alt="" />
        <img src={Youtube} alt="" />
      </div>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  )
}

export default Header