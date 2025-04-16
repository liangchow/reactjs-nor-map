import { createContext, useState } from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

function App() {

  const [showModal, setShowModal] = useState(false)
  const [stateData, setStateData] = useState({
    class: null,
    id: null,
    name: null,
    d: null,
  })
  
  function handleStateClick(e){
    const state = e.target;
    const newData = {
      class: state.getAttribute('class'),
      id: state.getAttribute('id'),
      name: state.getAttribute('name'),
      d: state.getAttribute('d'),
    }

    setStateData(newData)
    setShowModal(true)
  }

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  function handleToggleModalMap(){
    setShowModal(true)
  }


  return (
    <>
      <Main handleStateClick={handleStateClick} stateData={stateData} setStateData={setStateData} />
      {showModal && (<SideBar handleToggleModal={handleToggleModal} stateData={stateData} />)}
      <Footer stateData={stateData} />
    </>
  )
}

export default App
