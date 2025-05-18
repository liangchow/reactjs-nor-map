export default function Footer(props) {

  const {stateDisplay} = props

  return (
    <footer>
      <div id="footer-top">
         <h1>NOR PROJECT</h1>
         <h2>{stateDisplay.name}</h2>
      </div>
      <div id="footer-bottom">
          <small>Created with 💛 by </small>     
          <a target="_blank" href="https://www.linkedin.com/in/lcchow">
            <p>@lchow</p>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
      </div>
    </footer>
  )
}
