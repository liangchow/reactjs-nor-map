import { useState } from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

function App() {

  const [showModal, setShowModal] = useState(true)

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  function handleToggleModalMap(){
    setShowModal(true)
  }

  return (
    <>
      <Main handleToggleModalMap={handleToggleModalMap} />
      {showModal && (<SideBar handleToggleModal= {handleToggleModal} />)}
      <Footer />
    </>
  )
}

export default App
