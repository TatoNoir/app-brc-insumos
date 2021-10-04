import React from 'react'
import Button from '@material-ui/core/Button'

import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    
    return(
        <ul className="NavBar">
           <li> <Button size="large">
            BRC Store
            </Button></li>
           <li><Button size="large">
            Tienda
            </Button></li>
           <li><Button size="large">
            Nuestras marcas
            </Button></li>
           <li> <Button size="large">
            Contacto
            </Button></li>
           <li><CartWidget cantidad="1"/></li>
        </ul>
    )
}

export default NavBar;