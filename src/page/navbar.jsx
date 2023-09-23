import React, { useState,useEffect} from "react";
import "./navbar.css"
import image from "../image/laptop.jpg"
import { Link } from "react-router-dom";
export default function Navbar(){
    const [open, setopen] = useState(false)
    const [btn , setBtn] = useState(false)
    const [English , setEnglish] = useState('فارسی')
    const [English1 , setEnglish1] = useState('Welcome')
    const [English2 , setEnglish2] = useState('Home')
    const [English3 ,setEnglish3] = useState('About us')
    const [English4 ,setEnglish4] = useState('servise')
    const [English5 ,setEnglish5] = useState('Log in')
    const [English6 ,setEnglish6] = useState('Sing in')
     const menu = () => {
        setopen(!open)
     }
     console.log(open);
     const language = () =>{
        setBtn(!btn)
        setEnglish(btn ? 'فارسی' : 'English')
        setEnglish1(btn ? 'Welcome' : 'خوش امدید') 
        setEnglish2(btn ? 'Home' : 'خانه')
        setEnglish3(btn ? 'About us' :'درباره ما' )
        setEnglish4(btn ? 'servise' :' خدمات' )
        setEnglish5(btn ? 'Log in' :' وارد شوید' )
        setEnglish6(btn ? 'Sing in' :' ثبت نام کنید' )
        
     }


    const [isActive, setIsActive] = useState(false);

            useEffect(() => {
              const nav = document.querySelector('.nav');
          
              const fixNav = () => {
                if (window.scrollY > nav.scrollHeight + 150) {
                  setIsActive(true);
                } else {
                  setIsActive(false);
                }
              };
          
              window.addEventListener('scroll', fixNav);
          
              return () => {
                window.removeEventListener('scroll', fixNav);
              };
            }, []);

    
    return(
        <>
        <div className={isActive ? 'active ' : 'nav'} >
            <nav className="flex justify-between items-center mx-10">
                <div>
                    <p className={isActive ? "font-custom my-2 text-lg md:text-3xl font-bold transition-all ease-in duration-300" : "text-white font-custom my-2 text-lg md:text-3xl font-bold transition-all ease-in duration-300"}>{English1}<span className={isActive ? "text-blue-800 transition-all ease-in duration-300" :  " transition-all ease-in duration-300 text-blue-500"} >.</span></p>
                </div>
                <div  className={isActive ? 'transition-all ease-in duration-300 absolute md:static md:block bg-white z-20 pl-5 md:pl-0 md:bg-inherit left-0 top-[52px] w-full md:w-auto  ' : ' transition-all ease-in duration-300 text-white absolute md:static md:block bg-black pl-5 md:pl-0 md:bg-inherit left-0 top-[52px] w-full md:w-auto' }>
                        <ul className="md:flex hidden md:block " >
                            <li><button className="bbtn"><Link >{English2}</Link></button></li>
                            <li><button className="bbtn"><Link>{English3}</Link></button></li>
                            <li><button className="bbtn"><Link>{English4}</Link></button></li>
                        </ul>
                        {open && (<div>
                        <ul className={isActive ?"md:flex z-20 md:hidden" :"md:flex z-20 md:hidden"}>
                            <li><button className="bbtn"><Link>{English2}</Link></button></li>
                            <li><button className="bbtn"><Link>{English3}</Link></button></li>
                            <li><button className="bbtn"><Link>{English4}</Link></button></li>
                        </ul>
                        </div>)}

                </div>
                <div className="flex">
                    <i nameName='menu' class={isActive ? "text-black bi bi-person-circle  text-lg my-3 cursor-pointer hover:text-blue-500 transition ease-in-out  hover:rounded-lg hover:-translate-y-1  duration-300 absolute md:static top-[3px] right-20" : "bi bi-person-circle text-white text-lg my-3 cursor-pointer hover:text-blue-500 transition ease-in-out  hover:rounded-lg hover:-translate-y-1  duration-300 absolute md:static top-[3px] right-20"}></i>
                        <div className={isActive ? "pl-5 md:pl-0  font-custom absolute md:static bg-white md:bg-inherit left-0 top-[220px] md:block w-full md:w-auto transition-all ease-in duration-300" : "pl-5 md:pl-0 text-white font-custom absolute md:static bg-black md:bg-inherit left-0 top-[220px] md:block w-full md:w-auto transition-all ease-in duration-300"}>

                            <ul className="md:flex hidden md:block">
                                <li>
                                    <button className={isActive ? "b1btn text-black" : "b1btn"}><Link >{English5}</Link></button>
                                    <span className="border-r-2 mr-2 ml-1 hidden md:inline "></span>
                                </li>
                                
                                <li><button className={isActive ? 'b1btn ml-4 md:ml-0 text-black' : 'b1btn border-gray-300 ml-4 md:ml-0'}><Link>{English6}</Link></button></li>
                                <li><button onClick={language} className={isActive ? "b1btn font-custom text-black" : "text-white b1btn font-custom"}>{English}</button></li>
                            </ul>
                            
                            {open && (<div>                            
                                <ul className=" md:flex md:hidden">
                                <li>
                                    <button className={isActive ? "b1btn " : " b1btn"}><Link >{English5}</Link></button>
                                    <span className="border-r-2 mr-2 ml-1 hidden md:inline  "></span>
                                </li>
                                
                                <li><button className={isActive ? "b1btn ml-4 md:ml-0" : "b1btn ml-4 md:ml-0"}><Link>{English6}</Link></button></li>
                                <li><button onClick={language} className={isActive ? " b1btn font-custom " : " b1btn font-custom "}>{English}</button></li>

                            </ul></div>)}
                            

                        </div>
                </div>
                <div className=" md:hidden text-white text-lg my-3 cursor-pointer hover:text-blue-500 transition ease-in-out  duration-300 hover:rounded-lg hover:-translate-y-1 ">
                <i onClick={menu} className={isActive ?"bi bi-list text-black text-2xl my-3 cursor-pointer hover:text-blue-500 transition ease-in-out  hover:rounded-lg hover:-translate-y-1  duration-300" : "bi bi-list  text-white text-2xl my-3 cursor-pointer hover:text-blue-500 transition ease-in-out  hover:rounded-lg hover:-translate-y-1  duration-300"}></i>
                
                </div>
                
            </nav>
        </div>
        
        </>
    )
}