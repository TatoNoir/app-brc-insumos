import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    
    return(
        <ul className="NavBar">
           <li className="Button"> <Button size="large">
            <Link to='/Home'>BRC Store</Link></Button>
            </li>
           <li><Button size="large">
           <Link to='/Store'> Tienda</Link>
            </Button></li>
           <li><Button size="large">
           <Link to='/Brands'> Nuestras Marcas</Link>
            </Button></li>
           <li><Button size="large">
           <Link to='/Contact'> Contacto</Link>
            </Button></li>
           <li><CartWidget cantidad="1"/></li>
        </ul>
    )
}

export default NavBar;