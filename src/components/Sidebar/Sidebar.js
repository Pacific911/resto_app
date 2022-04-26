import React from 'react';
import {
  AiFillHome,
  AiOutlinePlusCircle,
  AiOutlineTable,
} from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { GiKnifeFork } from 'react-icons/gi';
// import { icon } from 'react-icons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/sidebar.css';
import SidebarItem from './SidebarItem';

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-image">
        <img src={Logo} alt="" />
      </div>
      <Link to="/Dashboard"><SidebarItem icon={<AiFillHome />} title="Dashboard" /></Link>
      <Link to="/type/new"><SidebarItem icon={<AiOutlinePlusCircle />} title="Add Food Types" /></Link>
      <Link to="/type/all"><SidebarItem icon={<AiOutlineTable />} title="View Food Types" /></Link>
      <Link to="/"><SidebarItem icon={<AiOutlinePlusCircle />} title="Add cuisine" /></Link>
      <Link to="/"><SidebarItem icon={<AiOutlineTable />} title="View cuisines" /></Link>
      <Link to="/"><SidebarItem icon={<AiOutlinePlusCircle />} title="Add Food/Dish" /></Link>
      <Link to="/"><SidebarItem href="/" icon={<GiKnifeFork />} title="View Food/Dish" /></Link>
      <button type="submit" className="button-log">
        Logout
        <i className="log-icon">
          <MdLogout />
        </i>
      </button>
    </div>
  );
}

export default sidebar;
