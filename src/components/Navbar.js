import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import './Style/style.css';
import Logo from '../assets/images/logo.png';

function Navbar() {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: { sm: '122px' },
                mt: { sm: '32px', xs: '20px' },
                justifyContent: 'none',
            }}
            p="20px"
        >
            <Link to="/">
                <img src={Logo} alt="Logo" className="logo" />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="26px"
                fontWeight="bold"
                alignItems="flex-end">
                <Link to="/" className="link-home" >Home</Link>
                <a href="#exercises" className="link-exercise" >Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar