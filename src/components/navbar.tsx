import { NavLink } from 'react-router-dom';
import RecentIcon from '../img/Recent';
import HomeIcon from '../img/Home';
import SettingsIcon from '../img/Settings';
import UserIcon from '../img/UserImage';
import '../styles/navbar/navbar.css';

function Navbar(){

    return(
        <nav>
            <ul>
            <li><NavLink to="/home" className={({ isActive }) => (isActive ? "link-active" : "link")}><HomeIcon /></NavLink></li>
            <li><NavLink to="/recent" className={({ isActive }) => (isActive ? "link-active" : "link")}><RecentIcon /></NavLink></li>
            <li><NavLink to="/settings" className={({ isActive }) => (isActive ? "link-active" : "link")}><SettingsIcon /></NavLink></li>
            </ul>
            <div className='nav-bottom'>
                <NavLink to="/user" className={({ isActive }) => (isActive ? "link-active" : "link")}><UserIcon /></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;