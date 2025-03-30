import { Link } from 'react-router-dom'
import "../css/Sidebar.css"
import {useState} from "react"
import dashboard from "../assets/dashboard.png";  
import user from "../assets/user.png";
import bell from "../assets/bell.png";
import mail from "../assets/mail.png";
import comment from "../assets/comment.png";
import folder from "../assets/folder.png";
import settings from "../assets/settings.png";
import group from "../assets/group.png";
import lock from "../assets/lock.png";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        {/* Toggle Button for Mobile */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰ Menu
        </button>
  
        {/* Sidebar Menu */}
        <div className={`sidebar-links ${isOpen ? "show" : ""}`}>
          <Link to="/" className="sidebar-link">
            <img src={dashboard} alt="Dashboard" className="sidebar-icon" />
            Dashboard
          </Link>
          <Link to="/" className="sidebar-link">
            <img src={user} alt="Portfolio" className="sidebar-icon" />
            Portfolio
          </Link>
          <Link to="/" className="sidebar-link">
            <img src={bell} alt="Notifications" className="sidebar-icon" />
            Notifications
          </Link>
          <Link to="/" className="sidebar-link">
            <img src={mail} alt="Notices" className="sidebar-icon" />
            Notices
          </Link>
          <Link to="/" className="sidebar-link">
            <img src={comment} alt="Auction" className="sidebar-icon" />
            Auction
          </Link>
          <Link to="/" className="sidebar-link">
            <img src={folder} alt="Data Upload" className="sidebar-icon" />
            Data Upload
          </Link>
          <Link to="/" className="sidebar-link">
            <img src={settings} alt="Control Panel" className="sidebar-icon" />
            Control Panel
          </Link>
          <Link to="/" className="sidebar-link">
            <img src={group} alt="User Management" className="sidebar-icon" />
            User Management
          </Link>
          <Link to="/" className="sidebar-link">
            <img src={lock} alt="Permissions" className="sidebar-icon" />
            Permissions
          </Link>
        </div>
      </div>
    );
  }

export default Sidebar