import React from 'react'
import './Clear.css'

const Clear = ({setMessages}) => {
  return (
    <button onClick={() => setMessages([])} className='clear'>Clear</button>
  )
}

export default Clear