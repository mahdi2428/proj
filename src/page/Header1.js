import React , {useState} from "react";
import image from "../image/laptop2.jpg"


export default function Header1(){
    return(
        <>
        <div>
        <div > 
            <img  className= " relative" src={image} />
        </div>
        <div className="p-1 absolute left-[20px] top-[90px] text-gray-300 flex border-t border-l border-l-blue-900 border-t-blue-900 rounded-l-xl  ">
            <p className="text-lg font-custom h-full w-full  ">
                this page is about code programming try to <br/> 
                give people a work uppouinty.
            </p>
        </div>
        </div>
        </>
    )
}