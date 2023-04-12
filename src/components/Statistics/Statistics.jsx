import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const statistics = useLoaderData(); 
    return (
        <div>
            <h1 className='statistics-title'>Statistics of Assignments</h1>
            <AreaChart
                width={1400}
                height={500}
                data={statistics}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment_name" />
                <YAxis/>
                <Tooltip />
                <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;