
import { Link } from 'react-router-dom'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My App
                </Typography >
                <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
                    <Link to="/"><Button color="inherit">Home</Button></Link>
                    <Link to="/aboutus"><Button color="inherit">About-Us</Button></Link>
                    <Link to="/products"><Button color="inherit">Products</Button></Link>
                    <Link to="/contactus"><Button color="inherit">Contact-Us</Button></Link>
                </Typography>


            </Toolbar>
        </AppBar>
        // <div>
        //     <li>
        //         <Link to="/">Homepage</Link>
        //     </li>
        //     <li>
        //         <Link to="/aboutus">About-Us</Link>
        //     </li>
        //     <li>
        //         <Link to="/products">Products</Link>
        //     </li>
        //     <li>
        //         <Link to="/contactus">Contact-Us</Link>
        //     </li>
        // </div>
    )
}

export default Navbar