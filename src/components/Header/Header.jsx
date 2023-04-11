import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/All Images/job-hut.jpg';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/applied-jobs'>Applied Jobs</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
                <button>Start Applying</button>
            </nav>
        </div>
    );
};

export default Header;