import React from 'react'
import poret1 from '../../Assets/images/poert1.png'
import port2 from '../../Assets/images/port2.png'
import port3 from '../../Assets/images/port3.png'
import style from "./Portfolio.module.css";
export default function Portfolio() {
  const [selectedImage, setSelectedImage] = React.useState('')

  const images = (src) => {
    setSelectedImage(src)
  }
  const handleClose = () => {
    setSelectedImage('');
  };

  return (
    <div className="container  position-relative">
      <div className="row g-2 ">
        <h1 className= {`${style.text} text-center py-2 fw-bold`}>Portfolio Component</h1>
        <i className={`${style.tect} fa-solid fa-star fs-3 text-center`}></i>
        <div className="col-md-4">
          <div className={`${style.biglayer} m-3 `} onClick={() => { images(poret1) }}>
            <img src={poret1} className={`${style.hoverEffect} position-relative w-100 rounded-2`} alt="Portfolio 1" />
            <div className={`${style.plusIcon} text-center`} ><i className={`${style.plus} fa-solid fa-plus`}></i></div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`${style.biglayer} m-3 `} onClick={() => { images(port2) }}>
            <img src={port2} className={`${style.hoverEffect} position-relative w-100 rounded-2`} alt="Portfolio 2" />
            <div className={`${style.plusIcon} text-center`} ><i className={`${style.plus} fa-solid fa-plus`}></i></div>
          </div>
          </div>
          <div className="col-md-4">
          <div className={`${style.biglayer} m-3 `} onClick={() => { images(port3) }}>
            <img src={port3} className={`${style.hoverEffect} position-relative w-100 rounded-2`} alt="Portfolio 3" />
            <div className={`${style.plusIcon} text-center`} ><i className={`${style.plus} fa-solid fa-plus`}></i></div>
          </div>
          </div>
          <div className="col-md-4">
          <div className={`${style.biglayer} m-3 `} onClick={() => { images(poret1) }}>
            <img src={poret1} className={`${style.hoverEffect} position-relative w-100 rounded-2`} alt="Portfolio 1" />
            <div className={`${style.plusIcon} text-center`} ><i className={`${style.plus} fa-solid fa-plus`}></i></div>
          </div>
          </div>
          <div className="col-md-4">
          <div className={`${style.biglayer} m-3 `} onClick={() => { images(port2) }}>
            <img src={port2} className={`${style.hoverEffect} position-relative w-100 rounded-2`} alt="Portfolio 2" />
            <div className={`${style.plusIcon} text-center`} ><i className={`${style.plus} fa-solid fa-plus`}></i></div>
          </div>
          </div>
          <div className="col-md-4">
          <div className={`${style.biglayer} m-3 `} onClick={() => { images(port3) }}>
            <img src={port3} className={`${style.hoverEffect} position-relative w-100 rounded-2`} alt="Portfolio 3" />
            <div className={`${style.plusIcon} text-center`} ><i className={`${style.plus} fa-solid fa-plus`}></i></div>
          </div>
          </div>
      </div>
      <div className={` position-absolute d-block bg-dark w-75 rounded-2 h-75 top-50 start-50 translate-middle ${selectedImage ? '' : 'd-none'}`}>
      <i  className='fa solid fa-x text-white bg-transparent position-absolute p-3 fs-2' onClick={handleClose} style={{ cursor: 'pointer' }}></i>
        <img src={selectedImage} className='w-100 h-100 rounded-3' alt="Selected Portfolio" />
      </div>
    </div>
  )
}