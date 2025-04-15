import { createContext, useState } from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

function App() {

  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({
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

    setData(newData)
    handleToggleModal()
  }

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  function handleToggleModalMap(){
    setShowModal(true)
  }


  return (
    <>
      <Main handleStateClick={handleStateClick} />
      {showModal && (<SideBar handleToggleModal={handleToggleModal} stateData={stateData} />)}
      <Footer stateData={stateData} />
    </>
  )
}

export default App
