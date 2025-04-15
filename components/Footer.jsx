import React from 'react'

export default function Footer(props) {

  const {stateData} = props

  return (
    <footer>
      <div>
         <h1>NOR PROJECT</h1>
         <h2>{stateData.name}</h2>       
      </div>
    </footer>
  )
}
