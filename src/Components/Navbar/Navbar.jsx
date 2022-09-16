import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <nav className="navbar">
            <div className='navbar-div'>
                <h1 className='page-title'>✨ Happy Cake ✨</h1>
                <Link to="/" className='nav-links'>
                    <h3>Home</h3>
                </Link> 
                <Link to="/contacto" className='nav-links'>
                    <h3>Contacto</h3>
                </Link> 
                <Link to="/productos" className='nav-links'>
                    <h3>Productos</h3>
                </Link> 
            </div>          
                                  
        </nav>
    )
}

export default Navbar