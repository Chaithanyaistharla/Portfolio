// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/cssi-logo.png';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <header>
      {/* Logo */}
      <img src={logo} alt="CSSI Logo" className="header-logo" />
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : undefined}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : undefined}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? 'active' : undefined}>
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : undefined}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : undefined}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} className="theme-switch" aria-label="Toggle Theme">
        {theme === 'light' ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}