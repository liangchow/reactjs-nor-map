import React from 'react'
import NorMap from '../src/assets/us-map.svg?react'

export default function Main(props) {

  const {handleToggleModalMap} = props

  return (
    <div className="imgContainer">
        <NorMap className="norMap" onClick={handleToggleModalMap}/> 
    </div>

  )
}
