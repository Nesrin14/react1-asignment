import React from 'react'
import style from "./About.module.css";

export default function About() {
  return (
    <section className={`${style.about} container-fluid vh-100 text-center text-light d-flex justify-content-center align-items-center `}>
      <div className="about">
        <h2  className='display-5 py-3 fw-bold my-2'>About Component</h2>
        <div className="star-container"><div className={`${style.about .starcontainer}`}></div><i class="fa-solid fa-star fs-3"></i><div className='line2'></div></div>
        <div className='row'>
          <div className="col-md-6 py-3 ps-5 fw-semibold my-2">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6 py-3 pe-5 fw-semibold my-2">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </section>
  )
}