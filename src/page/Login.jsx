import React from 'react'
import { useAuth } from '../context/AuthContext'


export default function Login() {
  let {LoginUser} = useAuth()
  return (
    <div>
        <form onSubmit={LoginUser}>
            <input type='text'  name='username' placeholder='Enter Your Username'/>
            <input type='password' name='password' placeholder='Enter Password'/>
            <input type='submit'/> 
        </form>
    </div>
  )
}
