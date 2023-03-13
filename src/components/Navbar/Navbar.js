import './Navbar.scss'
import logo from './logo.webp'
import { CartWidget} from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-cart-wrapper">
                   <Link to='/'>
                        {<img src={logo} alt="logo" className='header-logo'/>}       
                   </Link>
                        
                                
                    <CartWidget/>
                
                </div>
                <nav className="navbar">
                  
                        <Link to='/productos/whiskies' className="nav-link">Whiskies</Link>
                    
                    
                        <Link to='/productos/vinos' className="nav-link">Vinos</Link>
                    
                    
                        <Link to='/productos/cervezas' className="nav-link">Cervezas</Link>
                    
                    
                        <Link to='/productos/burbujas' className="nav-link">Burbujas</Link>
                    
                    
                        <Link to='/productos/licores' className="nav-link">Licores</Link>
                    
                    
                        <Link to='/productos/bebidas' className="nav-link">Bebidas</Link>
                    
                    
                        <Link to='/productos/comidas' className="nav-link">Comidas</Link>
                    
                    
                        <Link to='/productos/varios' className="nav-link">Varios</Link>
                                        
                </nav>

               
            </div>

        </header>
    )
}
