import React from 'react'

import './button.css'

const Button = (props) => {
  return (
    <button onClick={props.click} className="btn-input">Check</button>
  )
}

export default Button