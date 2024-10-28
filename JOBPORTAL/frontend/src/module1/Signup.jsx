import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import email_icon from '../assets/email.png'
import user_icon from '../assets/user.png'
import password_icon from '../assets/password.png'
import phone_icon from '../assets/phone.png'
import qualification_icon from '../assets/qualification.png'


const Signup = (props) => {
  var [inputs, setInputs] = useState({ Name: "", Email: "",phoneno:"",qualification:"" ,Password: "", Role: "user" });
  var location = useLocation();
  var navigate = useNavigate()
  console.log("loc", location.state);

  const loginHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const addLogin = () => {
    console.log("clicked");
        axios
        .post("http://localhost:3000/loginadd", inputs)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate('/login')
        })
        .catch((err) => {
          console.log(err);
        });
  };

  

  return (
    <div class="back">
      <div class="sign" >
      <Box
      component="form"
      noValidate
      autoComplete="off" sx={{backgroundColor:'#00000000'}}>
      <br/><br/>
      <Typography variant='h4'>SIGNUP</Typography><br/>
       
        <img  src={user_icon} alt='' width="50" height="45"/>
        <TextField 
        label='Name' 
        variant='filled' 
        onChange={loginHandler}
        name="Name"
        value={inputs.Name}></TextField><br></br><br></br>
        <img  src={email_icon} alt='' width="50" height="45" color='yellow'/>
        <TextField 
        label='Email' 
        variant='filled'
        onChange={loginHandler}
        name="Email"
        value={inputs.Email}></TextField><br></br><br></br>
        <img  src={phone_icon} alt='' width="50" height="45"/>
        <TextField 
        label='Phoneno' 
        variant='filled'
        onChange={loginHandler}
        name="phoneno"
        value={inputs.phoneno}></TextField><br></br><br></br>
        <img  src={qualification_icon} alt='' width="50" height="45"/>
        <TextField 
        label='Qualification' 
        variant='filled'
        onChange={loginHandler}
        name="qualification"
        value={inputs.qualification}></TextField><br></br><br></br>
       
        <img  src={password_icon} alt='' width="50" height="45"/>
        <TextField 
        label='Password'
     type='password'
        variant='filled'
        onChange={loginHandler}
        name="Password"
        value={inputs.Password}></TextField><br></br><br></br>
       
    <br></br>
    
    <Link to='/login'>
        <Button 
        variant='contained'
        onClick={addLogin}>SUBMIT</Button></Link>
        <br/><br/>
        Already a user?
        <Link to='/login'>Login
        </Link><br></br><br></br>
        <Link to='/'>
                      <Button variant='contained'>Home</Button></Link>&nbsp;
        
        </Box>
        </div>
    </div>
  )
}

export default Signup