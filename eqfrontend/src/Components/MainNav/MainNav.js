import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import "./MainNav.css"

export default function MainNav(props) {
  return (
    <>
    <nav className='Desktop'>
        <div className="EasyQuizzy">
        <a className="navbar-brand EasyQuizzy" href="/">{props.title}</a>
    <butan className="navbar-aggler" type="butan" data-bs-aggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="aggle navigation">
      <span className="navbar-aggler-icon"></span>
    </butan>
    <div className='Home'>
        <a className="navbar-brand Home" href="/home">{props.home}</a>
    </div>
    <div className='About'>
        <a className="navbar-brand About" href="/about">{props.about}</a>
    </div>
    <div className='Contacts'>
        <a className="navbar-brand Contacts" href="/contacts">{props.contacts}</a>
    </div>
    <div className="Icon1"><FontAwesomeIcon icon={faUserPlus} size="small" /></div>
    {/* <div className='Login'>
        <Link className="navbar-brand Login" to="/login">{props.login}</Link>
    </div> */}
     </div>
    </nav>
    </>
  )
}
