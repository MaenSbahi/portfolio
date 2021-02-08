import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/style.scss';
import Logo from '../Assets/logo.png';

const Navbar = ({ logoState }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={`main-header ${logoState ? '' : 'wide-nav'}`}>
            <nav>
                <div className={`logo ${logoState ? 'sm-logo' : ''}`}>
                    <Link to="/">
                        <img src={Logo} alt="Maen Sbahi Logo" />
                    </Link>
                </div>
                <div
                    className={`nav-toggle ${toggle ? 'close' : ''}`}
                    role="button"
                    onClick={() => setToggle(!toggle)}
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={`links ${toggle ? 'links-open' : ''}`}>
                    <Link
                        className={`link ${logoState ? 'active' : ''}`}
                        to="/"
                        name="Home"
                        onClick={() => setToggle(!toggle)}
                    >
                        Home
                    </Link>
                    <NavLink
                        className="link"
                        to="/projects"
                        name="Projects"
                        onClick={() => setToggle(!toggle)}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        className="link"
                        to="/contact"
                        name="Contact"
                        onClick={() => setToggle(!toggle)}
                    >
                        contact
                    </NavLink>
                    <span className="active-link animation"></span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
