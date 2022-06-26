import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import './Style/style.css';
import Logo from '../assets/images/headerImage.png';

function Navbar() {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
                gap: { sm: '100px' },
                mt: { sm: '32px', xs: '12px' },
                justifyContent: 'none'

            }}
            p="20px"
            className="navbar"
        >
            <Link to="/">
                <img src={Logo} alt="Logo" className="logo" />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontSize="26px"
                fontWeight="bold"
                alignItems="flex-end"
                sx={{
                    fontSize: { xs: '20px' },


                }}
            >
                <Link to="/" className="link-home" >Home</Link>
                <a href="#exercises" className="link-exercise" >Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar