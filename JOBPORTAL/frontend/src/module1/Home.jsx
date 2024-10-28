import React from 'react' 
import Navbar from './Navbar'
import { Typography } from '@mui/material'

const Home = () => {
  return (
    <body>
    <div class="wrapper">
     <div class="nav">
      <Navbar></Navbar>
      <br /><br /><br />
      <Typography variant='h5'>
      FIND YOUR PERFECT CAREER MATCH</Typography>
     </div>
    </div>
    </body>
  )
}

export default Home