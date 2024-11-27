import React from 'react'
import './Messages.css'

const MessagesWrapper = ({children}) => {
  return (
    <div className='wrapper'>
        {children}
    </div>
  )
}

export default MessagesWrapper