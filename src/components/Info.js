import React from 'react'
import linkedin from './images/linkedin-light.png'
import email from './images/mail.png'

const Info = () => {
  return (
    <div>
      <div className='ProfilPhoto'></div>
      <div className="headings">
        <h1>Jure Eres</h1>
        <h3>FRONTEND DEVELOPER</h3>
        <h4>Aalborg, Dansk</h4>
      </div>
      <div className="buttons">
        <button><img src={email} alt="" width={15}/> Email</button>
        <button className='linkedin'><img src={linkedin} alt="" width={15}/> LinkedIn</button>
      </div>
    </div>
  )
}

export default Info
