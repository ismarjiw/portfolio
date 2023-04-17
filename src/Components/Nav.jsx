import React from "react"
import {Link} from 'react-scroll'
import portLogo from '../assets/logo.png'
import newLogo from '../assets/IW.png'
import resume from '../documents/Resume.pdf'

export default function Nav() {

    return ( 
        <div className="nav-content" id='hero'>
        <header>
        <nav> 
            <img className="logo" src={newLogo} />
            <div className="nav-links">
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={600}>Home</Link>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={600}>About</Link>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={600}>Projects</Link>
                <a href={resume} target="_blank">Resume</a>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={600}>Contact</Link>
            </div>
            
        </nav>
        </header>
        </div>
    )
}