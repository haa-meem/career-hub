import React from 'react';
import photo from '../../assets/All Images/P3OLGJ1 copy 1.png'
const Home = () => {
    return (
        <div className='banner'>
            <div>
                <h1>One Step Closer To Your Dream Job</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>
            </div>
            <img src={photo} alt="" className='man'/>
        </div>
    );
};

export default Home;