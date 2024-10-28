import Navuser from './Navuser.jsx';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const Browserjob = () => {
  const location = useLocation();
  const name = location.state;
  console.log(name);
  
  const [jobs, setJobs] = useState([]);
  const [jobNameFilter, setJobNameFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:3000/view")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const applyJob = (val) => {
    axios.post("http://localhost:3000/jobapply", val, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true
    })
    .then((res) => {
      console.log(res.data.message);
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleFilterChange = () => {
   
  };

  const filteredJobs = jobs.filter(job => 
    (jobNameFilter ? job.Jobname.toLowerCase().includes(jobNameFilter.toLowerCase()) : true) &&
    (locationFilter ? job.Location.toLowerCase().includes(locationFilter.toLowerCase()) : true)
  );

  return (
    <div className="user">
      <div className="nav">
        <Navuser />
        <br /><br />
        <Typography variant='h4'>List of All Available Jobs</Typography>
        <br /><br />
        <TextField
          label="Job Name"
          variant="outlined"
          value={jobNameFilter}
          onChange={(e) => { 
            setJobNameFilter(e.target.value); 
            handleFilterChange();
          }}
        />
        <TextField
          label="Location"
          variant="outlined"
          value={locationFilter}
          onChange={(e) => { 
            setLocationFilter(e.target.value); 
            handleFilterChange();
          }}
        />
        <br /><br />
        <Grid container spacing={2}>
          {filteredJobs.map((val, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Card sx={{ maxWidth: 345, height: '100%' }}>
                <CardContent>
                  <Typography sx={{ mb: 1.5 }}>Job Name: {val.Jobname}</Typography>
                  <Typography sx={{ mb: 1.5 }}>Description: {val.Description}</Typography>
                  <Typography sx={{ mb: 1.5 }}>Requirements: {val.Reqirements}</Typography>
                  <Typography sx={{ mb: 1.5 }}>Location: {val.Location}</Typography>
                  <Typography sx={{ mb: 1.5 }}>Salary: {val.Salary}</Typography>
                  <Typography sx={{ mb: 1.5 }}>Job Type: {val.Jobtype}</Typography>
                  <Button variant='contained' onClick={() => applyJob(val)}>APPLY</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Browserjob;
