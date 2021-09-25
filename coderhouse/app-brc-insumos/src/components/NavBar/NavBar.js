import React from 'react'
import Button from '@material-ui/core/Button'

import './NavBar.css'

const NavBar = () => {
    return(
        <div className="NavBar">
            <Button size="large">
            Inicio
            </Button>
            <Button size="large">
            Tienda
            </Button>
            <Button size="large">
            Nuestras marcas
            </Button>
            <Button size="large">
            Contacto
            </Button>
        </div>
    )
}

export default NavBar;