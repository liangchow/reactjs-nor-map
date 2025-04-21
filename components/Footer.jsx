import React from 'react'

export default function Footer(props) {

  const {stateDisplay} = props

  return (
    <footer>
      <div>
         <h1>NOR PROJECT</h1>
         <h2>{stateDisplay.name} {stateDisplay.id}</h2>       
      </div>
    </footer>
  )
}
