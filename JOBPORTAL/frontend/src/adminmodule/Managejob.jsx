import { Box, Typography, Button, TextField } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import NavBar from './NavBar'


const Managejob = (props) => {

  var [inputs, setInputs] = useState({ Jobname: "", Description: "", Reqirements: "", Location: "", Salary: "", Jobtype: "" });
  var location = useLocation();
  var navigate = useNavigate()

  const JobHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const addJob = () => {
    if(location.state!==null){
      axios
      .put("http://localhost:3000/edit/"+location.state.val._id,inputs,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      )
      .then((res) => {
          alert(res.data.message)
          navigate('/admindash')
          
      })
      .catch((err) => console.log(err));
  }else{
    axios.post("http://localhost:3000/jobadd", inputs,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      }
    ).then((res) => {
      console.log(res.data.message)
      alert(res.data.message);
      navigate('/admindash')
    }).catch((err) => {
      console.log(err);
    });
  }
  }
  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        Jobname: location.state.val.Jobname,
        Description: location.state.val.Description,
        Reqirements: location.state.val.Reqirements,
        Location: location.state.val.Location,
        Salary: location.state.val.Salary,
        Jobtype: location.state.val.Jobtype,
      });
    }
  }, []);
  return (
    <div class="adminn">
      <div class="nav">
        <NavBar/>
        <br /><br /><br /><br /><br />
        <div class="sign" >
          <Box component="form" noValidate>
            <Typography variant='h4'>ADD JOB</Typography><br />
            <TextField
              label='Job Name'
              variant='filled'
              onChange={JobHandler}
              name="Jobname"
              value={inputs.Jobname}></TextField>&nbsp;&nbsp;&nbsp;
            <TextField
              label='Description'
              variant='filled'
              onChange={JobHandler}
              name="Description"
              value={inputs.Description}></TextField><br /><br /><br/><br/>
            <TextField
              label='Reqirements'
              variant='filled'
              onChange={JobHandler}
              name="Reqirements"
              value={inputs.Reqirements}></TextField>&nbsp;&nbsp;&nbsp;
            <TextField
              label='Location'
              variant='filled'
              onChange={JobHandler}
              name="Location"
              value={inputs.Location}></TextField><br/><br/><br/><br/>
            <TextField
              label='Salary'
              variant='filled'
              onChange={JobHandler}
              name="Salary"
              value={inputs.Salary}></TextField>&nbsp;&nbsp;&nbsp;
            <TextField
              label='Job Type'
              variant='filled'
              onChange={JobHandler}
              name="Jobtype"
              value={inputs.Jobtype}></TextField><br></br><br></br>

            <Link to='/admindash'>
            <Button
              variant='contained'
              onClick={addJob}>ADD JOB</Button>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Managejob