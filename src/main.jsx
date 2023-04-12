import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('featured_jobs.json')
      },
      {
        path:'/:jobID',
        element:<JobDetails></JobDetails>,
        loader: ({params}) => {
          return fetch(`featured_jobs.json/${params.jobID}`)
            .then(res => res.json())
            .then(data => data.id);
        } 
      },
      {
        path:'applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>,
        loader:()=>fetch('statistics.json')
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
