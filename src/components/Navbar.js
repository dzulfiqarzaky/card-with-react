import reactLogo from "../images/logo192.png"

export default function Navbar (){
  return (
    <nav className="flex space">
      <div className="flex">
          <img src={reactLogo}
          alt="logo"
          className="nav--icon"
          />
          <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}