import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const appliedJobs=useLoaderData();
    console.log(appliedJobs);
    return (
        <div>
            <h2>Applied Jobs</h2>
            <div>
                {appliedJobs.length}
            </div>
        </div>
    );
};

export default AppliedJobs;