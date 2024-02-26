import {useState} from 'react'
import "../assets/css/navbar.css"
import logo_light from '../assets/images/Event-Hub-logos-removebg.png'
import { CgProfile } from "react-icons/cg";
// // import logo_dark from '../../assets/images/Event Hub-logos_white.png'
import search_icon_light from '../assets/images/search-w.png'
import profile_icon from '../assets/images/account_blue.png'
import { FiLogOut } from 'react-icons/fi'
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import {Link} from 'react-router-dom';
// import search_icon_dark from '../../assets/images/search-b.png'
// import toogle_light from '../../assets/images/night.png'
// import toogle_dark from '../../assets/images/day.png'

const Navbar = () => {
const[showSidebar,setShowSidebar]=useState(false);

const toggleSidebar=()=>{
  setShowSidebar(!showSidebar);
};

  return (
    <div className='navbar'>
        <img src={ logo_light} alt='' className='logo'/>
        <ul>
        <Link to='/eventhub/user/home'><li>Home</li></Link>
        <li>About Us</li>
        <Link to='/eventhub/user/evnt'><li>Events</li></Link>
        </ul>
        <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={ search_icon_light} alt=""/>
        </div>
        <img src={profile_icon} alt=""  className='p_icon' onClick={toggleSidebar}/>
        {showSidebar &&(
        <div className='sidebar'>
        <ul>
       <Link to='/eventhub/user/edit_profile'><li><ImProfile />Edit profile</li></Link>
        <li><FaShoppingCart />My Bookings</li>
        <Link to='/eventhub/login'><li><IoMdLogOut />Logout</li></Link>
        </ul>
        </div>
        )}
      
    </div>
  )
}

export default Navbar