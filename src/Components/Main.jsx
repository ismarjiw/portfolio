import React from 'react'
import githubLogo from '../assets/github.png'
import linkedinLogo from '../assets/linkedin.png'

export default function Main() {
    return (
        <div>
            <h1>Hi, I'm Ismarji Workman |</h1>
            <h2>Software Engineer</h2>
            <div className="social-content">
                <a href="https://github.com/ismarjiw"><img className="social-icon" src={githubLogo} /></a>
                <a href="https://www.linkedin.com/in/ismarjiworkman/" ><img className="social-icon" src={linkedinLogo} /></a>
            </div>
            <h3>I love exploring and trying new things</h3><h3>I'm a lifelong learner and love KBBQ</h3> 
        </div>
        
    )
}