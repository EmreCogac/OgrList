import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <nav>
    <ul>
      
        <Link style={{margin: 20}} to="/add">Add</Link>
     
      
        <Link style={{margin: 20}}to="/">Students</Link>
    
    
        <Link  style={{margin: 20}} to="/univesties">Universities</Link> 
    
    </ul>
  </nav>

  )
}

export default navbar