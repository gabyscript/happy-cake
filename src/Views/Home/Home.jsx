import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <section className="home-section">
            <div className='info-div'>
                <h2 className='home-title'>Pastelería Happy Cake</h2>
                <h3 className='home-subtitle'>Endulzamos tu vida, mejoramos tu día.</h3>
                <div className="button-div">
                    <button className='link-buttons'>
                        <Link to="/productos" className='router-links'>Cotiza nuestros productos</Link> </button>
                    <button className='link-buttons'>
                        <Link to="/contacto" className='router-links'>Contáctanos</Link> </button>
                </div>
                
            </div>
        </section>
    )
 }

export default Home;