import React, { useState,useEffect} from "react";
import "./expanding-cards.css"
import img1 from "../image/card0.jpg"
import img2 from "../image/card1.jpg"
import img3 from "../image/card2.jpg"
import img4 from "../image/card3.jpg"
import img5 from "../image/card4.jpg"


export default function ExpandingCards(){


    setTimeout(()=>{
        const panels =  document.querySelectorAll('.panel')
        panels.forEach(panel => {
            
            panel.addEventListener("click", () => {
                removeActiveClasses()
                panel.classList.add("active")
            })
        })
        
        const removeActiveClasses=()=>{
            panels.forEach(panel => {         
                panel.classList.remove("active") 
            })
        }
    } , 600)
    

    return(
        <>
        <div className="h-[800px]  flex gap-2 mt-10 font-custom">
        <div style={{
            backgroundImage: `url(${img1})`
        }} className= "panel active w-9/12 h-full  bg-cover bg-center rounded-[50px] ml-10  relative cursor-pointer" >
            <p className="opacity-0 ml-5 mt-10 ">this is javascriptfor making web and other thing such as games ect</p>
        </div>
            <div style={{
            backgroundImage: `url(${img2})`
        }} className="panel w-9/12 h-full  bg-cover bg-center rounded-[50px] relative cursor-pointer">
            <p className="opacity-0 ml-5 mt-10 ">this is javascriptfor making web and other thing such as games ect</p>
        </div>
            <div style={{
            backgroundImage: `url(${img3})`
        }} className="panel w-9/12 h-full  bg-cover bg-center rounded-[50px] relative cursor-pointer">
            <p className="opacity-0 ml-5 mt-10 ">this is javascriptfor making web and other thing such as games ect</p>
        </div>
            <div style={{
            backgroundImage: `url(${img4})`
        }} className="panel w-9/12 h-full  bg-cover bg-center rounded-[50px] relative cursor-pointer">
            <p className="opacity-0 ml-5 mt-10 ">this is javascriptfor making web and other thing such as games ect</p>
        </div>
            <div style={{
            backgroundImage: `url(${img5})`
        }} className="panel w-9/12 h-full  bg-cover bg-center rounded-[50px] mr-10 relative cursor-pointer">
            <p className="opacity-0 ml-5 mt-10 ">this is javascriptfor making web and other thing such as games ect</p>
        </div>
        </div>
        </>
    )
}