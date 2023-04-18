import React from 'react'
import githubLogo from '../assets/github.png'
import linkedinLogo from '../assets/linkedin.png'
import resume from '../documents/Resume.pdf'
import avatar from '../assets/avatar.png'

export default function Main() {
    const openResume = () => {
        window.open(resume, '_blank');
    }

    return (
        <div className="main-content">
            <section className="hero">
                <h3 className="intro">Hi, my name is</h3>
                <h1 className="name"> Ismarji Workman. </h1>
                <h2 className="job-title">Software Engineer</h2>
            </section>
            <div className="about-avatar">
                <section className="about-resume">
                    <h2 id='about'> About Me </h2>
                    <h3>Hi! My name is Ismarji and I enjoy creating things that live on the internet & love KBBQ.<span className="food">🍖</span></h3>
                    <h3>My interest in web development started back in 2011 when I decided to try learning Javascript on Codecademy.</h3>
                    <h3>Fast-forward to today, I've had the privilege of getting sponsored by Walmart to attend <a href="https://hackbrightacademy.com/">Hackbright's</a> full-stack software engineering program and recently graduated January 2023. My main focus these days is building accessible, inclusive products that focus on both front-end and back-end design.</h3>
                    <h3>Here are a few technologies I've been working with recently:</h3>
                    <ul>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Javascript (ES6+)</li>
                        <li>React</li>
                        <li>Java</li>
                    </ul>
                    <button onClick={openResume}>Download Resume <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></button>
                </section>
                <section className="avatar-img">
                    <img className="avatar" src={avatar} />
                </section>
            </div>
            <div className="left-side">
                <ul>
                    <li>
                        <a href="https://github.com/ismarjiw" target="_blank"><img className="social-icon" src={githubLogo} /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ismarjiworkman/" ><img className="social-icon" src={linkedinLogo} /></a>
                    </li>
                </ul>
            </div>
        <div className="right-side">
            <div className="email-wrapper">
                <a href="mailto:ismarjiw@protonmail.com">ismarjiw@protonmail.com</a> 
            </div>
        </div>
        </div>
        
    )
}