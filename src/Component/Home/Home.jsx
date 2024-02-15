import React from 'react'
import style from "./Home.module.css"
import img from "../../Assets/images/avataaars.svg"

export default function Home() {
  return (
    <div className= {`${style.bgcolor} container-fluid vh-100`}>
   <div>
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-4">
             <img src={img} className='w-100 p-5' />
             <h1 className=' text-light text-center mt-2 display-4 fw-semibold'>Start Framework</h1>
             <p className='text-light text-center fw-bold fs-5'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
   </div>
</div>
  )
}
