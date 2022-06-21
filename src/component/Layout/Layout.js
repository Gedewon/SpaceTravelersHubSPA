import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Layout.module.css';
import logo from './logo.png';

function Layout({ children }) {
  return (
    <div>
      <header>
        <section className={style.logoSection}>

          <img src={logo} alt="logo of Space Traveler's Hub" />
          <h1>Space Travelers&apos; Hub</h1>
        </section>
        <nav>
          <ul>
            <li>
              <NavLink
                to="missions"
                className={({ isActive }) => (isActive ? style.active : style.deactivate)}
              >
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="rocket"
                className={({ isActive }) => (isActive ? style.active : style.deactivate)}
              >
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="profile"
                className={({ isActive }) => (isActive ? style.active : style.deactivate)}
              >
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
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
