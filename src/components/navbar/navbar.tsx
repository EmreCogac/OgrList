import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/add">Add</Link>
      </li>
      <li>
        <Link to="/">Students</Link>
      </li>
      <li>
        <Link to="/univesties">Universities</Link> {/* Corrected typo in "universities" */}
      </li>
    </ul>
  </nav>

  )
}

export default navbar