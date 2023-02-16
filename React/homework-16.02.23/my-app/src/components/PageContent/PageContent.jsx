import React from 'react'
import Projects from "./Projects/Projects"
import About from "./About/About"
import Map from "./Map/Map"

function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <Projects/>
        <About/>
        <Map/>
    </div>
  )
}

export default PageContent