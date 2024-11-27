import React from 'react'
import './Messages.css'
const Messages = ({text, role}) => {
  return (
    <div className='message'>
        {role === 'user' ? <i className="fa-regular fa-user"></i> : <i className="fa-solid fa-robot"></i>}
        <p>{text}</p>
    </div>
  )
}

export default Messages