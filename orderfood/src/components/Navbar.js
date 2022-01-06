import React, {useState} from 'react';
import logo from '../assests/Logo-Burger-House-Restaurant.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import './Navbar.css';

const Navbar = () => {
    const [openLinks,setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
        console.log(openLinks)
    }
    return (
        <div className={'navbar'}>
            <div className={'leftSide'} id={openLinks ? "open" : "close"}>
                <img src={logo}/>
            </div>
            <div className={'hiddenLinks'}>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Menu</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
            </div>
            <div className={'rightSide'}>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Menu</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
            </div>
        </div>
    )
}
export default Navbar;