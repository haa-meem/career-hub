import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobDetails = useLoaderData();
 
    console.log(jobDetails);
    return (
        <div>
            <h2>Job number:{jobDetails[0].id}</h2>
        </div>
    );
};
export default JobDetails;