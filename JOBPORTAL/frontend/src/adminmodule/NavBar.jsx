import { AppBar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);

  };

  
  return (
    <div>
     
          <AppBar color='yellow'>
            <Toolbar>
                <Typography variant="h4" sx={{flexGrow:1}}textAlign={'left'}>ADMIN DASHBOARD</Typography>
                <Link to="/manjob">
                <Button variant="contained" color="success">MANAGE JOBS</Button></Link>&nbsp;
                <Link to="/fulluser">
                <Button variant="contained" color="success">APPLICATION LIST</Button></Link>&nbsp;
                <Link to="/">
                <Button variant="contained" color="success">LOGOUT</Button></Link>
            </Toolbar>
            </AppBar>
    </div>
  )
}

export default NavBar