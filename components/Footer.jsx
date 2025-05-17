import React from 'react'

export default function Footer(props) {

  const {stateDisplay} = props

  return (
    <footer>
      <div>
         <h1>NOR PROJECT</h1>
         <h2>{stateDisplay.name} {stateDisplay.id}</h2>     
          <a target="_blank" href="https://www.linkedin.com/in/lcchow">
            <p>Created by @lcchow</p>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
      </div>
    </footer>
  )
}
