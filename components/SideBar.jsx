import { stateInfo as state_info} from '../src/utils/index.js'

export default function SideBar(props) {

  const {handleToggleModal, stateData, stateDescription} = props

  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleToggleModal}></div>
          <div className="sidebarContents">
            <h2>{stateData.name}</h2>
            <div className="descriptionContainer">
              <p className="descriptionTitle">Description</p>
              <p>
                {state_info[stateData.id].background}
              </p>
            </div>
            <button onClick={handleToggleModal}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
    </div>
  )
}
