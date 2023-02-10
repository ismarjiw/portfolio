import React from "react"
import portLogo from '../assets/logo.png'

export default function Nav() {
    return (
        <div className="nav-content">
        <nav> 
            <img className="logo" src={portLogo} />
            <div className="nav-links">
                <a href="http://localhost:5173/">Home</a>
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a> 
            </div>
            
        </nav>
        </div>
    )
}