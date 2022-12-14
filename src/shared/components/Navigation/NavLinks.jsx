import React from 'react'
import { NavLink } from 'react-router-dom';

import './NavLInks.css';

const NavLinks = () => {
    return ( 
        <ul className='nav-links'> 
            <li>
                <NavLink to='/' >All USERS</NavLink>
            </li>
            <li>
                <NavLink to='/1/places'>MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/places/new'>ADD PLACE</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>AUTHENTICATE</NavLink>
            </li>
        </ul>
     );
}
 
export default NavLinks;