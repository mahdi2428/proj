import React,{useState} from 'react'
import { useAuth } from '../context/AuthContext'
import './login.css'
import { Link } from 'react-router-dom'
import image  from '../image/network.jpg'
import Navbar from './navbar'

let k1 = 0
let k = 0
export default function Login() {
  let {LoginUser} = useAuth()
  const [namechanger , setNamechanger]= useState(false)
  const [placeholder ,setPlaceholder ] = useState(false)
  const [putplaceholder , setPutplaceholer] = useState('Enter your name')
  const [putplaceholder1 , setPutplaceholer1] = useState('Enter your password')
  const [putplaceholder2 , setPutplaceholer2] = useState('Log in')
  const [putplaceholder3 , setPutplaceholer3] = useState('Forgot your passworld?')
  const [putplaceholder4 , setPutplaceholer4] = useState('if you have not register yet:')
  const [putplaceholder5 , setPutplaceholer5] = useState('sing up')
  const [putplaceholder6 , setPutplaceholer6] = useState('Log in')
  const [justifyContent, setJustifyContent] = useState('flex');
  


  const placeholderchanger = () =>{
      let i = 0
      setPlaceholder(!placeholder);
      setPutplaceholer(placeholder ? 'Enter your name' : 'اسم خود را وارد کنید')
      setPutplaceholer1(placeholder ? 'Enter your password' : 'رمز خود را وارد کنید')
      setPutplaceholer2(placeholder ? 'Log in ' : 'وارد شوید')
      setPutplaceholer3(placeholder ? 'Forgot your passworld? ' : ' رمز خود را فراموش کردید؟')
      setPutplaceholer4(placeholder ? 'if you have not register yet:' : 'اگر ثبت نام نکردید')
      setPutplaceholer5(placeholder ? 'sing in' : 'ثبت نام کنید')
      setPutplaceholer6(placeholder ? 'Log in ' : 'وارد شوید')
      setNamechanger(!namechanger);
  
      if(k==0){
      for( i=0; i<2 ; i++){
          document.querySelectorAll(".input")[i].style.textAlign='right'
      }}
      if(k==1){
          for( i=0; i<2 ; i++){
              document.querySelectorAll(".input")[i].style.textAlign='left'
              }
          }
          
        k++
      if(k==2){
          k=0
        }
        if (k === 0) {
          setJustifyContent({justifyContent :'flex-start'});
        } else if (k === 1) {
          setJustifyContent({justifyContent :'flex-start'});
        }


  }
  return (
    <div style={{backgroundImage: `url(${image})`}}>
      <div className='flex'>
      <button className=' border-violet-200 m-3 py-1 px-2 bg-gray-200 rounded-xl shadow-xl 
        hover:bg-blue-600 hover:text-white hover:shadow-lg transition ease-in-out  bg-blue-500 hover:-translate-y-1  duration-300 font-medium' onClick={placeholderchanger}>{namechanger ? 'English':'فارسی'}</button>
      </div>
    <div className='min-h-screen flex justify-center items-center focus:ring-0'>
        <form className=' w-full mx-2 lg:w-1/3 xl:w-1/5 flex flex-col border border-violet-200 p-4 shadow bg-gray-100 rounded-xl bg-transparent h-96 focus:ring-0 backdrop-blur-md ' onSubmit={LoginUser}>
            <p className='text-2xl mb-5 text-gray-300 font-extrabold'>{putplaceholder2}</p>

            <i className="bi bi-person text-xl text-gray-300 "></i>
            
            <input className=' input ' type='text'  name='username' placeholder= {putplaceholder}/>
            
            <i className="bi bi-key text-xl text-gray-300 pt-2"></i>
            
            <input className='input  mt-1 text-white' type='password' name='password' placeholder={putplaceholder1}/>
           
            <div>
              <div >
                <p style={{ setJustifyContent }} className='mt-3 flex font-bold text-gray-300 ml-3 transition ease-in-out hover:text-white hover:underline hover:-translate-y-1  duration-300 changer' ><Link >{putplaceholder3}</Link></p> 
              </div>
              <p className='mt-1 text-sm text-gray-300 flex justify-start ml-3 transition ease-in-out ' >{putplaceholder4} 
                <Link className='text-gray-300 underline hover:-translate-y-1 duration-300 ml-2 font-semibold '>{putplaceholder5}</Link>
              </p>
              <button className='font-thin rounded-2xl w-full mt-5 py-1 shadow border-gray-400 bg-white hover:bg-blue-600 hover:text-white hover:shadow-lg transition ease-in-out  bg-blue-500 hover:-translate-y-1  duration-300 font-medium	'  type='submit' >{putplaceholder6}</button>
            </div>
        </form>
    </div>
    </div>
  )
}
