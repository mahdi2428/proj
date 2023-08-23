import React from 'react'
import { useAuth } from '../context/AuthContext'
import './login.css'
import { Link } from 'react-router-dom'
import image from '../image/network.jpg'


export default function Login() {
  let {LoginUser} = useAuth()
  return (
    <div className='min-h-screen flex justify-center items-center focus:ring-0'
    style={{backgroundImage: `url(${image})`}}>
        <form className=' w-1/5 flex flex-col border border-violet-200 p-4 shadow bg-gray-100 rounded-xl bg-transparent h-96 focus:ring-0 backdrop-blur-md ' onSubmit={LoginUser}>
            <p className='text-2xl mb-10 text-gray-300 font-extrabold'>Log In</p>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 absolute  text-gray-400 ml-2 mt-14 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            
            <input className='input pb- ' type='text'  name='username' placeholder='Enter Your Username '/>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"className="h-5 absolute mt-36 ml-2 text-gray-400 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            
            <input className='input mt-11' type='password' name='password' placeholder='Enter Password'/>
           
            <div>
              <p className='mt-10 font-bold text-gray-300 flex justify-start ml-3 transition ease-in-out delay-150 hover:text-white hover:underline hover:-translate-y-1  duration-300 w-32' ><Link> froget password</Link></p> 
              <p className='mt-1 text-sm text-gray-300 flex justify-start ml-3 transition ease-in-out delay-150 ' >if you have not register yet: 
                <Link className='text-gray-300 underline hover:-translate-y-1 duration-300 ml-2 font-semibold '>sing up</Link>
              </p>
              <button className='font-thin rounded-2xl w-full mt-5 py-1 shadow border-gray-400 bg-white hover:bg-blue-600 hover:text-white hover:shadow-lg transition ease-in-out  bg-blue-500 hover:-translate-y-1  duration-300 font-medium	'  type='submit' >Log in</button>
            </div>
        </form>
    </div>
  )
}
