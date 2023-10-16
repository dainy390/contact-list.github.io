// Importing  Dependencies for the React-router-dom
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
//  Style for the CSS 
import Style from './Navbar.module.css';

// Retruning the interface
function NavBar() {
    return (
        <>
            <nav >
                <Link className='link' to= '/'>
                    <h2 className= {Style.heading}>Welcome to the Contact book </h2>
                </Link>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar;