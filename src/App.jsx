import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <BlueSquare />
      <WhiteSquare />
    </div>
  )
}


function BlueSquare() {
  return (
    <div className="blue-square">
      <h3>Your result</h3>
      <BlueCircle />
      <h2>Great</h2>
      <p>Your score higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

function BlueCircle() {
  return (
    <div className="blue-circle">
      <h1>76</h1>
      <p>of 100</p>
    </div>
  )
}

function WhiteSquare() {
  return (
    <div className="white-square">
      <h3>Summary</h3>
      <Sense icon="https://assets.ccbp.in/frontend/react-js/mental-health-score-icon.png" title="Reaction" score="76" color="blue" />
      <Sense icon="https://assets.ccbp.in/frontend/react-js/physical-health-score-icon.png" title="Memory" score="76" color="green" />
      <Sense icon="https://assets.ccbp.in/frontend/react-js/social-life-score-icon.png" title="Verbal" score="76" color="yellow" />
      <Sense icon="https://assets.ccbp.in/frontend/react-js/financial-health-score-icon.png" title="Visual" score="76" color="red" />
      <button type="button" className="retake-test-button">Continue</button>
    </div>
  )
}

function Sense({icon, title, score, color}){

  return (
    <div className={`sense-box ${color}`} >
      <img src={icon} alt="icon" />
      <h6>{title}</h6>
      <p>{score} <span>/100</span></p>
    </div>
  )}

