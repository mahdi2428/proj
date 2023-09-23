import React from "react";
import './circle-images.css'

export default function CircleImages(){
  return (
    <>
    <div className=" flex justify-evenly mt-10 mr-14">
      {/* <div className="w-4/12 border-gary-500 shadow-2xl p-10 rounded-xl bg-gradient-to-r from-blue-900 to-blue-950">
        <p >William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He is the recipient of various accolades, including two Academy Awards, two British Academy Film Awards, two Golden Globe Awards, and a Primetime Emmy Award. As a public figure, Pitt has been cited as one of the most powerful and influential people in the American entertainment industry.</p>
      </div> */}
        <div class="gallery">
        <img src="../image/laptop1.jpg" alt="" />
        <img src="../image/laptop2.jpg" alt="" />
        <img src="../image/laptop3.jpg" alt="" />
        <img src="../image/laptop4.jpg" alt="" />
      </div>      
  

      </div>
    </>
  )
}