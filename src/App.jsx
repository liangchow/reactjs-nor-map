import { useState } from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

function App() {

  const [showModal, setShowModal] = useState(true)

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  return (
    <>
      <Main handleToggleModal={handleToggleModal} />
      {showModal && (<SideBar handleToggleModal= {handleToggleModal} />)}
    </>
  )
}

export default App
