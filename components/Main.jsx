import React from 'react'
import NorMap from '../src/assets/us-map.svg?react'

export default function Main(props) {

  const {handleStateClick, stateData, setStateData} = props

  return (
    <div className="imgContainer">
        <NorMap className="norMap" onClick={handleStateClick} /> 
    </div>

  )
}
