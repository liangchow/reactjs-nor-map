import { useState } from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

function App() {

  const [showModal, setShowModal] = useState(false)
  const [stateDisplay, setStateDisplay] = useState({name: null})
  const [stateData, setStateData] = useState({
    // class: null,
    id: null,
    name: null,
    d: null,
  })
  
  function handleToggleModal(){
    setShowModal(!showModal)
  }

  function handleStateOnMouseOver(e){
    const state = e.target;
    const newState = {name: state.getAttribute('name')}

    setStateDisplay(newState)
  }

  function handleStateClick(e){
    const state = e.target;
    const newData = {
      // class: state.getAttribute('class'),
      id: state.getAttribute('id'),
      name: state.getAttribute('name'),
      d: state.getAttribute('d'),
    }

    setStateData(newData)
    setShowModal(true)
  }

  return (
    <>
      <Main handleStateOnMouseOver={handleStateOnMouseOver} handleStateClick={handleStateClick} />
      {showModal && (<SideBar handleToggleModal={handleToggleModal} stateData={stateData} />)}
      <Footer stateDisplay={stateDisplay} stateData={stateData}/>
    </>
  )
}

export default App
