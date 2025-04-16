import React from 'react'
import Map from  './Map'
import NorMap from '../src/assets/us-map.svg?react'

export default function Main(props) {

  const {handleStateOnMouseOver, handleStateClick} = props

  return (
    <div className="imgContainer">
        {/* <Map className="norMap" onMouseEnter={handleStateOnMouseOver} onClick={handleStateClick} />   */}
        <NorMap className="norMap" onMouseOver={handleStateOnMouseOver} onClick={handleStateClick} /> 
    </div>

  )
}
