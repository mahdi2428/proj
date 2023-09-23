import React,{Component} from "react";
import Footer from "./Footer";
import CircleImages from "../component/Circle-images";


export default function Contact(){
    // const handle = (e) => {
    //     if(e.code ==13){
    //        alert('your massage has been sent')
    //     }else{
    //         alert('your massage has been sent')
    //     }
    // }
    return(
        <>
        <div>
           <div className="flex justify-evenly py-10 ">
            <div>
            <CircleImages />
            </div>
            <form  className="submit flex flex-col justify-center border md:w-4/12 border-blue-900 shadow-3xl rounded-3xl rounded m-10 bg-gradient-to-r from-blue-900 to-blue-950">
                <h2 class="text-4xl font-bold text-white text-center py-3 ">Contact Us</h2>
                <div>
                    <div className="mt-10 ">
                        <input className="focus:outline-none text-white  font-custom bg-transparent border-b border-b-gray-500 w-11/12 mb-4 ml-4 pb-2 pl-2 rounded-xl" type="text" placeholder="Enter your fristname" />
                        <input className="focus:outline-none text-white  font-custom bg-transparent border-b border-b-gray-500 w-11/12 ml-4  pb-2 pl-2 rounded-xl" type="text" placeholder="Enter your lastname" />
                    </div>
                    <div className=" flex flex-col  mt-3">
                        <input className=" focus:outline-none text-white  font-custom bg-transparent border-b border-b-gray-500 w-11/12 ml-4  md:mt-10 pb-2 pl-2 rounded-xl" type="text" placeholder="Enter your email" />
                        <input className=" focus:outline-none text-white font-custom bg-transparent border border-t-0 border-gray-600 w-11/12 ml-4  mt-14 pb-12 pl-2 rounded-b-xl" type="text" placeholder="Text..." />
                    </div> 
                    <div className="flex mt-8">
                        <button className=" text-white border w-11/12 ml-4 mb-7 text-black p-1 bg-green-300 hover:bg-blue-600 hover:text-white border-0  hover:shadow-3xl font-custom transition-all duration-300 ease-in rounded-xl border-gray-500" > send</button>
                    </div>
                </div>
            </form>
            </div>
        </div>        
        </>
    )
}