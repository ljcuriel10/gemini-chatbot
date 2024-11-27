import React from 'react';
import './Section.css'

const Section = ({title, children}) => {
  return (
    <div className='col'>
        <h1 className='title'>{title}</h1>
        {children}
    </div>
  )
}

export default Section;