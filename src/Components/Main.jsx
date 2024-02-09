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
                    <h3>Hello! I'm Ismarji <i>(is-mar-e)</i>, a former ophthalmic technician and surgery coordinator with six years of healthcare experience, now immersed in the world of tech <span className="glasses">🤓</span></h3>
                    <h3>Known for my meticulous approach and precision, I bring a unique blend of healthcare expertise and a relentless commitment to excellence to every task I undertake. With an innate ability to master diverse responsibilities, I'm poised to make substantial contributions to cutting-edge projects within the tech industry.</h3>
                    <h3>Armed with a Bachelor of Science in Biology from the University of Georgia and a graduate of <a href="https://hackbrightacademy.com/">Hackbright Academy's</a> rigorous, 12-week full-stack software engineering bootcamp, I'm fully equipped to make a positive impact in the tech industry with the skills I've acquired along my tech journey.</h3>
                    <h3>If you're curious to learn more about me or explore my work, let's connect! Let's collaborate and create something extraordinary together <span className="rocket">🚀</span></h3>
                    <h3>In my free time, when I'm not coding, you can find me swimming <span className="swimming">🏊🏽‍♀️</span>, playing chess, or diving into a new fiction novel.</h3>
                    <h3>Here are a few technologies I've been working with recently:</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Python</li>
                        <li>Flask</li>
                        <li>FastAPI</li>
                        <li>Java</li>
                        <li>Spring Boot</li>
                    </ul>
                    <button onClick={openResume}>Download Resume <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></button>
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