import React,{useState} from "react";
import {BsChevronCompactLeft,BsChevronCompactRight,} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

export default function Slide(){
    const slide = [
        {
            url:'./image/slide.jpg',
        },
        {
            url:'./image/slide2.jpg'
        },
        {
            url:'./image/slide3.jpg'
        },
        {
            url:'./image/slide4.jpg'
        },
        {
            url:'./image/slide5.jpg'
        },
    ]
    const [index , setIndex]=useState(0)
    
    const pervslide = () => {
        const isFristSlide = index === 0;
        const newIndex = isFristSlide ? slide.length - 1 : index - 1 ;
        setIndex(newIndex) 
    }
    const nextslide = () => {
        const isLastSlide = index === slide.length -1;
        const newIndex = isLastSlide ? 0 : index + 1 ;
        setIndex(newIndex) 
    }

    const goToSlide = (slideIndex) => {
        setIndex(slideIndex)
    }

    return(
        <>
        <div className="h-[780px]  group z-0">
            <div 
            className="rounded-b-[20px] w-full h-full bg-cover bg-center duration-500 z-10" style={{backgroundImage:`url(${slide[index].url})`}}>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={pervslide} size={40}/>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextslide} size={40}/>
            </div>
            <div className="flex top-4 justify-center py-2 ">
                {slide.map((slides , slideIndex) =>(
                    <div className="text-gray-200 text-2xl  cursor-pointer hover:bg-blue-400 hover:rounded-full  hover:text-3xl duration-500"
                    key={slideIndex}
                    onClick={()=>goToSlide(slideIndex)}>
                        <RxDotFilled/>
                    </div>
                ) )}

            </div>
        </div>
        </>
    )
}