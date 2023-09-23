import React from "react";


export default function Body(){
    
    return(
        <>
            <div>
                <div className="flex justify-evenly my-14 font-custom ">
                    <p className=" grid-start-6 backdrop-blur-3xl py-2 px-2 shodow-3xl  border-none rounded-xl ">this page is about coding and making mony</p>
                    <img className="w-3/12 grid-end-6 rounded-xl shadow-2xl" src="./image/laptop5.jpg" />
                </div>
                <div className="flex justify-evenly my-14 pb-14 font-custom">
                    <img className="w-3/12 grid-end-6 rounded-xl shadow-2xl" src="./image/laptop6.jpg" />
                    <p className=" grid-start-6  backdrop-blur-3xl py-2 px-2 shodow-3xl  border-none rounded-xl">this page is about coding and making mony</p>
                </div>
            </div>
        </>
    )
}