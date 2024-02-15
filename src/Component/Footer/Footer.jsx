import React from 'react';
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`container-fluid d-flex justify-content-center align-items-center py-5 ${style.containerfluid}`}>
        <div className="row text-light text-center">
          <div className="col-md-4">
            <div className={`${style.containerfluid} location`}>
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${style.containerfluid} platforms`}>
              <h3>AROUND THE WEB</h3>
              <ul className='d-flex justify-content-center'>
                <li className={`${style.list}  border border-1 border-light rounded-circle`}><i className={`fa-brands p-2  fa-facebook ${style.icon}`}></i></li>
                <li className={`${style.list}  border border-1 border-light rounded-circle`}><i className={`fa-brands p-2  fa-twitter ${style.icon}`}></i></li>
                <li className={`${style.list}  border border-1 border-light rounded-circle`}><i className={`fa-brands p-2  fa-linkedin ${style.icon}`}></i></li>
                <li className={`${style.list}  border border-1 border-light rounded-circle`}><i className={`fa-solid  p-2 fa-globe ${style.icon}`}></i></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${style.containerfluid} freelancing`}>
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`copyright text-center ${style.copyright}`}>
        <span>Copyright © Your Website 2021</span>
      </div>
    </>
  );
}
