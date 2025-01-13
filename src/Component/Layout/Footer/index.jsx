import React from 'react'
import supportLogo from './supportLogo.png';
import './Footer.css'
const Footer = () => {
  return (
    <div className='supportButtonParent'>
    <button className='supportButton'>
      <img src={supportLogo} alt="" />
      Support
    </button>
    </div>
  )
}

export default Footer