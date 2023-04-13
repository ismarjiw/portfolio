import React from 'react'
import githubLogo from '../assets/github.png'
import linkedinLogo from '../assets/linkedin.png'

export default function Main() {
    return (
        <div className="main-content">
            <h3>Hi, my name is</h3>
            <h1> Ismarji Workman. </h1>
            <h2 className="job-title">Software Engineer</h2>
            <div className="social-content">
                <a href="https://github.com/ismarjiw"><img className="social-icon" src={githubLogo} /></a>
                <a href="https://www.linkedin.com/in/ismarjiworkman/" ><img className="social-icon" src={linkedinLogo} /></a>
            </div>
            <h2 id='about'> About Me </h2>
            <h3>Hi! My name is Ismarji and I enjoy creating things that live on the internet. My interest in web development started back in 2011 when I decided to try learning Javascript on Codecademy.</h3>
            <h3>Fast-forward to today, I've had the privilege of getting sponsored by Walmart to attend Hackbright's full-stack software engineering program. My main focus these days is building accessible, inclusive products that are more front-end leaning.</h3>
            <h3>Here are a few technologies I've been working with recently:</h3>
            <ul>
                <li>Python</li>
                <li>Javascript (ES6+)</li>
                <li>React</li>
                <li>Java</li>
                <li>Flask</li>
            </ul>
            <h3>I love exploring and trying new things <span className="magnify">🔎</span></h3><h3>I'm a lifelong learner and love KBBQ <span className="food">🍖</span></h3> 
        </div>
        
    )
}