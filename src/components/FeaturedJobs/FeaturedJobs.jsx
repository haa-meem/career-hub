import React from 'react';
import location from '../../assets/Icons/Location Icon.png';
import salary_icon from '../../assets/Icons/Frame.png';
import './FeaturedJobs.css';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ featured_job }) => {
    const { id,company_logo, job_title, company_name, work_mode, job_type, job_location, salary } = featured_job;
    return (
        <div className='featured_data'>
            <img src={company_logo} alt="" />
            <h2>{job_title}</h2>
            <h3>{company_name}</h3>
            <div className='job_type'>
                <p>{work_mode}</p>
                <p>{job_type}</p>
            </div>
            <div className="location">
                <img src={location} alt="" />
                <p>{job_location}</p>
            </div>
            <div className="salary">
                <img src={salary_icon} alt="" />
                <p>{salary}</p>
            </div>
            <button className='btn'><Link to={`/${id}`}>View Details</Link></button>
        </div>
    );
};

export default FeaturedJobs;