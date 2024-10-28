import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <AppBar position='static' sx={{backgroundColor:'#00000000'}}>
              <Toolbar>
             
              <Typography align='left' variant='h3' color='black' sx={{ flexGrow: 1}}>JOB PORTAL</Typography>
                      <Link to='/signin'>
                      <Button variant='contained' color="success">SIGN UP</Button></Link>&nbsp;
                      <Link to='/login'>
                      <Button variant='contained'color="success">LOGIN</Button></Link>&nbsp;
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar