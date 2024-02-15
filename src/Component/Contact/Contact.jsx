import React, { useState } from 'react';
import style from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className={` container vh-100 mx-auto`}>
      <div>
        <h1 className={`fw-bold text-center mt-4 ${style.text}`}>Contact Section</h1>
      </div>
      <form className={`d-flex flex-column justify-content-center`}>
        <label htmlFor="name" className={`py-1 ${name.length === 0 ? style.hiddenLabel : ''}`}> userName:</label>
        <input className="border-0 border-bottom py-2" type="text" placeholder="userName" id="name" value={name} onChange={(e) => handleInputChange(e, setName)} />

        <label htmlFor="age" className={`py-1 ${age.length === 0 ? style.hiddenLabel : ''}`}> userAge:</label>
        <input className="border-0 border-bottom py-2" type="number" placeholder="userAge" id="age" value={age} onChange={(e) => handleInputChange(e, setAge)} />

        <label htmlFor="email" className={`py-1 ${email.length === 0 ? style.hiddenLabel : ''}`}> userEmail:</label>
        <input className="border-0 border-bottom py-2" type="email" placeholder="userEmail" id="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />

        <label htmlFor="password" className={`py-1 ${password.length === 0 ? style.hiddenLabel : ''}`}> userPassword:</label>
        <input className="border-0 border-bottom py-2" type="password" placeholder="userPassword" id="password" value={password} onChange={(e) => handleInputChange(e, setPassword)} />


        <button className={`w-25 rounded-2 my-4 text-light ${style.submitButton}`}>
          Send Message
        </button>
      </form>
    </div>
  );
}
