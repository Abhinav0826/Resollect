import { Link } from 'react-router-dom'
import "../css/Navbar.css"
import logo from "../assets/logo.png";

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
        <img src={logo} alt="Logo" width="120" />
        </div>
        <div className="navbar-links">
        <Link to="/" className="nav-link">Login / Signup</Link>
        </div>
    </nav>
}

export default NavBar