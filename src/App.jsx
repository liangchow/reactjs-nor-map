import { useState } from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

function App() {

  // Declare useState()
  const [showModal, setShowModal] = useState(false)
  const [stateDisplay, setStateDisplay] = useState({
    name: null
  })
  const [stateData, setStateData] = useState({
    id: null,
    abbr: null,
    name: null,
  })

  // Declare functions
  function handleToggleModal(){
    setShowModal(!showModal)
  }

  function handleStateOnMouseOver(e){
    const state = e.target;
    const newState = {
      abbr: state.getAttribute('abbr'),
      name: state.getAttribute('name'),}

    setStateDisplay(newState)
  }

  function handleStateClick(e){
    const state = e.target;
    const newData = {
      id: state.getAttribute('id'),
      abbr: state.getAttribute('abbr'),
      name: state.getAttribute('name'),
    }
    
    setStateData(newData)
    setShowModal(true)
  }

  return (
    <>
      <Main handleStateOnMouseOver={handleStateOnMouseOver} handleStateClick={handleStateClick} />
      {showModal && (<SideBar handleToggleModal={handleToggleModal} stateData={stateData} />)}
      <Footer stateDisplay={stateDisplay} />
    </>
  )
}

export default App