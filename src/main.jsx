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
        loader:()=>fetch('/featured_jobs.json')
      },
      {
        path:'/:jobId',
        element:<JobDetails></JobDetails>,
        loader:async({params})=>{
          const res=await fetch('/featured_jobs.json');
          const data =await res.json();
          const jobDetails=data.find(info=>info.id==params.jobId);
          return jobDetails;
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
  {
    path:'*',
    element:<div>404 Not Found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
