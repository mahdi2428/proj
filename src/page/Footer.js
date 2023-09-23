import React from "react";

export default function Footer(){
    
    return(
        <>  
            <div className="text-white  bg-zinc-950  border-transparent border-t rounded-t-2xl">
                <div className="p-14 flex justify-between font-custom">
                    <div>
                        <img className="w-10 cursor-pointer" src="./image/icons8-laptop-64.png" />
                    </div>
                    
                        <div>
                            <ul>
                                <li>second</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>thrid</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>fourth</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>fifth</li>
                            </ul>
                        </div>
                   
                </div>
                <div className="flex w-72 border-slate-600 border-t px-4 pb-4 pt-3">
                    <img className="w-8 h-8 pr-1 cursor-pointer" src="./image/icons8-instagram-48.png" />
                    <img className="w-8 h-8 pl-1 cursor-pointer" src="./image/icons8-facebook-48.png" />
                </div>
            </div>

            
        </>
    )
}