import React from 'react';
import photo from '../../assets/All Images/P3OLGJ1 copy 1.png';
import icon1 from '../../assets/Icons/accounts 1.png';
import icon2 from '../../assets/Icons/business 1.png';
import icon3 from '../../assets/Icons/social-media 1.png';
import icon4 from '../../assets/Icons/chip 1.png';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const featured_jobs = useLoaderData();
    console.log(featured_jobs);
    return (
        <div>
            <section className='banner'>
                <div className='slogan'>
                    <h1>One Step Closer To Your <span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <img src={photo} alt="" className='man' />
            </section>
            <section>
                <div className='jobs-section'>
                    <h1>Job Category List</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='catagories'>
                    <div>
                        <img src={icon1} alt="" />
                        <h2>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                    <div>
                        <img src={icon2} alt="" />
                        <h2>Creative Design</h2>
                        <p>100+ Jobs Available</p>
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                        <h2>Marketing & Sales</h2>
                        <p>150 Jobs Available</p>
                    </div>
                    <div>
                        <img src={icon4} alt="" />
                        <h2>Engineering Job</h2>
                        <p>224 Jobs Available</p>
                    </div>
                </div>
            </section>
            <section>
                <div className='jobs-section'>
                    <h1>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='featured_jobs'>
                    {
                        featured_jobs.map(featured_job =><FeaturedJobs 
                        key={featured_job.id}
                        featured_job={featured_job}
                        ></FeaturedJobs>)
                    }
                </div>
                <button className='button'>See All Jobs</button>
            </section>
        </div>
    );
};

export default Home;