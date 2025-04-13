import React from 'react'

export default function SideBar(props) {

  const {handleToggleModal} = props

  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModal}></div>
          <div className="sidebarContents">
            <h2>The Brutal Martian Lanscape</h2>
            <div>
              <p>Description</p>
              <p>A whole alo of text around abput the poicture akdsflkdashfadkflkdsahflkdsahf
                jsdfakdsjf dsafksjdlk</p>
            </div>
            <button onClick={handleToggleModal}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
    </div>
  )
}
