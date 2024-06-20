import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark, faHome, faInfoCircle, faConciergeBell, faBriefcase, faEnvelope, faFileDownload, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { applyStoredTheme, toggleAccessibility } from './theme'; // Ensure the theme.js functions are correctly imported
import logo from './images/logo.png'; // Ensure this path is correct

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const links = document.querySelectorAll('nav ul li a');
        const currentPath = location.pathname;

        links.forEach(link => {
            if (link.pathname === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Apply stored theme on initial load
        applyStoredTheme();
        setDarkMode(document.body.classList.contains('accessibility-mode'));
    }, [location]);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleModeToggle = () => {
        toggleAccessibility();
        setDarkMode(!darkMode);
    };

    return (
        <div id="header">
            <nav>
                <Link to="/">
                    <img src={logo} className="logo" alt="Home" />
                </Link>
                <button id="menu-toggle" className="menu-toggle" onClick={openMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <ul id="sidemenu" className={`list ${menuOpen ? 'show' : ''}`}>
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faInfoCircle} /> About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faConciergeBell} /> Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faBriefcase} /> Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faEnvelope} /> Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/cv" onClick={closeMenu}>
                            <FontAwesomeIcon icon={faFileDownload} /> Resume
                        </Link>
                    </li>
                    <li className="mode-toggle-container">
                        <FontAwesomeIcon 
                            icon={darkMode ? faMoon : faSun} 
                            className="mode-toggle" 
                            onClick={handleModeToggle} 
                        />
                    </li>
                    <button id="menu-close" className="menu-close" onClick={closeMenu}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
