import React from 'react'
import './Button.css'
const Button = ({ variant, children, onClick, style }) => {
  return (
    <button onClick={onClick} className={`button ${variant}`} style={style}  >{children}</button>
  )
}

export default Button