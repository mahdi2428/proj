import React from "react";

export default function Cards(){
    return(
        <>
        <div className="flex justify-evenly my-14  font-custom ">
            <div className=" group relative w-auto h-auto ">
                <img className="  h-96  rounded-xl transition-all duration-1000 hover:blur-sm " src="./image/laptop.jpg" />
                <div className=" absolute left-3 top-6 opacity-0 transition-all duration-300 text-white group-hover:top-2  group-hover:opacity-100">
                    <p>adadad</p>
                </div>
            </div>

            <div className="group relative">
                <img className=" h-96 rounded-xl transition-all duration-1000 hover:blur-sm" src="./image/laptop3.jpg" />
                <div className="absolute top-6 left-3 opacity-0 transition-all duration-300 text-white group-hover:top-2 group-hover:opacity-100">
                    <p>adsw2</p>
                </div>
            </div>
            <div className=" group relative x-0 ">
                <img className=" h-96 rounded-xl transition-all duration-1000 hover:blur-sm " src="./image/laptop4.jpg" />
                <div className="absolute top-6 left-3 opacity-0 transition-all duration-300 text-white group-hover:top-2 group-hover:opacity-100">
                    <p>aajsgfd</p>
                </div>
                

            </div>
        </div>
        </>
    )
}