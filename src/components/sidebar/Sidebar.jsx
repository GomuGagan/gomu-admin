import React from 'react';
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp,PersonOutline,Storefront,AttachMoney,Equalizer
} from "@mui/icons-material"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <LineStyle className="sidebarIcon"/>
                    HOme
                    </li>
                    <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>
              Analytics
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Sales
                    </li>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <PersonOutline
 className="sidebarIcon"/>
                   Users
                    </li>
                    <li className="sidebarListItem">
                    <Storefront className="sidebarIcon"/>
              Products
                    </li>
                    <li className="sidebarListItem">
                    <AttachMoney className="sidebarIcon"/>
                    Transactions
                    </li>
                    <li className="sidebarListItem">
                    <Equalizer className="sidebarIcon"/>
                    Reports
                    </li>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <LineStyle className="sidebarIcon"/>
                   Mail
                    </li>
                    <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>
              Feedback
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Messages
                    </li>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <LineStyle className="sidebarIcon"/>
                    Manage
                    </li>
                    <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>
              Analytics
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Report
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;