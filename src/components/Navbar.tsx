import './Navbar.scss'
import Button from '../shared/Button'

function Navbar() {
  return (
    <nav>
        <h1>PORTIFÓLIO</h1>
        <ul>
            <li>
                <a href="/">Inicio</a>
            </li>
            <li>
                <a href="/gallery">Galeria</a>
            </li>
            <li>
                <a href="/contact">
                    <Button variant="primary" width="200px" height="50px">Contato</Button>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar