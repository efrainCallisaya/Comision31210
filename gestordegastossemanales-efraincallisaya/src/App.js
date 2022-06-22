
import NavBar from './components/NavBar.js'
import Logo from './components/Logo.js'
import Carrito from './components/carrito.js'
import Btns from './components/btns.js'

export default function App(props) {
  return (
    <nav className="navbar navbar-light bg-light static-top ">
      <Logo />
      <NavBar/>
      <Btns name="sesion" className="btn btn-primary me-5"/>
      <Btns name="registrate" className="btn btn-success me-5"/>
      <Carrito cantcarrito="1"/>
    </nav>
  )
} // end App