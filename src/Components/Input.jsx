import React from 'react'
import './Input.css'
const Input = ({setInput, text, onClick}) => {
  
  const handleInput = ({target}) => {
    setInput(target.value)
  }

  return (
    <div>
        <input onInput={handleInput} value={text} />
        <button className='ask' onClick={onClick}>Ask</button>
    </div>
  )
}

export default Input