import './Navbar.scss'
import logo from './logo.webp'
import { CartWidget} from '../CartWidget/CartWidget'


export const Navbar = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-cart-wrapper">
                   
                        {<img src={logo} alt="logo" className='header-logo'/>}
                                
                        <CartWidget/>
                
                </div>
                <nav className="navbar">
                    <ul className="nav-link-list">
                        <li>
                            <a href="#" className="nav-link">Whiskies</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Vinos</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Cervezas</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Burbujas</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Licores</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Bebidas</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Comidas</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link">Varios</a>
                        </li>
                    </ul>
                </nav>

               
            </div>

        </header>
    )
}
