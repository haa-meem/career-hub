import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import location from '../../assets/Icons/Location Icon.png';
import title from '../../assets/Icons/Frame-1.png';
import salary_icon from '../../assets/Icons/Frame.png';
import phone from '../../assets/Icons/Frame-2.png'
import email_icon from '../../assets/Icons/Frame-3.png'
import './JobDetails.css';
import { addToDb } from '../../utils/fakeDB';
const JobDetails = () => {
    const jobDetails = useLoaderData();
    const { id,job_title, job_location, salary, job_description, job_responsibility, educational_requirements, experiences, phone_no, email } = jobDetails;
    const applyJob =()=>{
        addToDb(id);
    }
    return (
        <div>
            <h2 className='jobDetailsTitle'>Job Details</h2>
            <section className='jobDetails'>
                <div className='detailscard'>
                    <h4>Job Description:</h4><p>{job_description}</p>
                    <h4>Job Responsibility:</h4><p>{job_responsibility}</p>
                    <h4>Educational Requirements:</h4><p>{educational_requirements}</p>
                    <h4>Experiences:</h4><p>{experiences}</p>
                </div>
                <div className='applycard'>
                    <h4>Job Details</h4>
                    <div className="job_salary">
                        <img src={salary_icon} alt="" />
                        <p>{salary}</p>
                    </div>
                    <div className="job_title">
                        <img src={title} alt="" />
                        <p>{job_title}</p>
                    </div>
                    <h4>Contact Information</h4>
                    <div className="phone">
                        <img src={phone} alt="" />
                        <h4>Phone:</h4>
                        <p>{phone_no}</p>
                    </div>
                    <div className="email">
                        <img src={email_icon} alt="" />
                        <h4>Email:</h4>
                        <p>{email}</p>
                    </div>
                    <div className="address">
                        <img src={location} alt="" />
                        <h4>Address:</h4>
                        <p>{job_location}</p>
                    </div>
                    <Link to={"/applied-jobs"}><button className='apply_btn' onClick={()=>applyJob(id)}>Apply Now</button></Link>
                </div>
            </section>
        </div>
    );
};
export default JobDetails;