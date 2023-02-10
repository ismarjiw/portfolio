import { useState } from 'react'
import portLogo from './assets/logo.png'
import githubLogo from './assets/github.png'
import linkedinLogo from './assets/linkedin.png'
import './App.css'
import Nav from "./Components/Nav"

function App() {

  return (
    <div className="App">
      <Nav />
      <h1>Hi, I'm Ismarji Workman |</h1>
      <h2>Software Engineer</h2>
      <div className="social-icons">
        <img src={githubLogo} />
        <img src={linkedinLogo} />
      </div>
      <h3>I love exploring and trying new things</h3><h3>I'm a lifelong learner and love KBBQ</h3>
    </div>
  )
}

export default App
