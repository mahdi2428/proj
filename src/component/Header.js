import React from 'react'
import { Link } from 'react-router-dom'


export default function Header
() {
  return (
    <div>
        <Link to='/login'>Login</Link>
        <span>   |   </span>
        <Link to='/'>Privatepage</Link>
    </div>
  )
  }
