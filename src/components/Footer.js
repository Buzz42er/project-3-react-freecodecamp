import React from 'react'
import linkedin from './images/linkedin.png'
import github from './images/github-sign.png'
import website from './images/web-development.png'
import email from './images/mail.png'

const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/jureeres-digital/">
        <img src={linkedin} alt="" width={30}/>
        </a>
      <a href="https://github.com/buzz42er">
        <img src={github} alt="" width={30}/>
        </a>
      <a href="https://jureeres.digital">
        <img src={website} alt="" width={30}/>
      </a>
      <a href="mailto:jure.eres@gmail.com">
        <img src={email} alt="" width={30}/>
        </a>
    </footer>
  )
}

export default Footer
