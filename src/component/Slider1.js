import React from "react";
import HeroSlider,{Slide} from "hero-slider/dist/HeroSlider";



export default function Slide1(){
    const silde1 = "./image/slide.jpg"
    const silde2 = "./image/slide1.jpg"
    const silde3 = "./image/slide2.jpg"
    const silde4 = "./image/slide3.jpg"
    const silde5 = "./image/slide4.jpg"
    return(
         <>
             <HeroSlider
                slidinganimetion="left_to_right"
                orientation="horizontal"
                inistialSlide={1}
                onBeforeChange={(previousSlide,nextSlide)=> console.log("onBeforeChange" ,previousSlide,nextSlide)}
                onChange={nextSlide => console.log("onChange",nextSlide)}
                onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
                settings={{
                    slidingDuration:250,
                    slidingDelay:100,
                    shouldAutoplay:true,
                    shouldDisplayButton:true,
                    autoplayDuration:5000,
                    hight:'100vh'
                }}
            >
                <Slide
                backgorund={{
                    backgorundImage:silde1,
                    backgorundAttachment:"fixed"
                }} />
                <Slide
                backgorund={{
                    backgorundImage:silde2,
                    backgorundAttachment:"fixed"
                }} />
                <Slide
                backgorund={{
                    backgorundImage:silde3,
                    backgorundAttachment:"fixed"
                }} />
                <Slide
                backgorund={{
                    backgorundImage:silde4,
                    backgorundAttachment:"fixed"
                }} />
                <Slide
                backgorund={{
                    backgorundImage:silde5,
                    backgorundAttachment:"fixed"
                }} />
                
            </HeroSlider>
        </> 

    )
}