import React from 'react'
import Rectangle from './Rectangle'
import Section from './Section'
import Section2 from './Section2'
import Events from './Events'
import Section3 from './Section3'
import Events2 from '../Events2'
import "../../App.css"



const Home = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
    <Rectangle />
    <Section />
    <Section2 />
    <Events />
    <Section3 />
    <Events2 />
  </div>
  )
}

export default Home