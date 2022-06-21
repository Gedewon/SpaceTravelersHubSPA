import React from 'react'
import { NavLink } from "react-router-dom";
import style from "./Layout.module.css"
function Layout({children}) {
  return (
    <div>
        <header>

            <h1>Space Travelers' Hub</h1>    
            <nav>
                <ul>
                    <li>
                        <NavLink to="missions"
                        className={({ isActive }) =>
                        isActive ? style.active : style.deactivate}>
                            Missions
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="rocket"
                        className={({ isActive }) =>
                        isActive ? style.active : style.deactivate}>
                            Rockets
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="profile"
                        className={({ isActive }) =>
                        isActive ? style.active : style.deactivate}>
                            My Profile
                        </NavLink> 
                    </li>
                </ul>
            </nav>
        
        </header>
        <div>
         {children}
        </div>
    </div>
  )
}

export default Layout