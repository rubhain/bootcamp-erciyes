import React from 'react'
import packageInfo from '../../../data/projects.json'

function Projects() {
  const projects = packageInfo.projects;
  console.log(projects);

  return (
    <>
        <div className="w3-container w3-padding-32" id="projects" >
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                Projects
            </h3>
        </div>
        <div className="w3-row-padding" >
          {projects.map((item, key) => 
              {
                return (
                        <div className="w3-col l3 m6 w3-margin-bottom" key={key}>
                          <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                              {item.type}
                            </div>
                            <img src={item.img} alt="House" style={{ width: "100%" }} />
                          </div>
                        </div>
                        )
              }
            )
          }
        </div>
    </>
  )
}

export default Projects