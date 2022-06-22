import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import ImageBanner from '../assets/images/crossfit.jpg';
const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }} position="relative" p="20px"
        >
            <Typography
                color="#FF2625"
                fontWeight="600"
                fontSize="26px"
                mb={4}
            >
                Crossfit club
            </Typography>
            <Typography
                color="#FFD6AE"
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '32px' } }}
            >
                Sweat , Smile <br /> and Repeat
            </Typography>
            <Typography
                color="#FFD6AE"

                fontSize="22px"
                lineHeight="35px"
                mt={2}
                mb={4}
            >
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" className="explore-btn"
                href="#exercises"
            >Explore exercises</Button>
            <Typography
                fontWeight={600}
                color="#FF2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize="200px"
            >
                Crossfit
            </Typography>
            <img src={ImageBanner} alt="ImageBanner"
                className="ImageBanner"
                sx={{
                    width: { lg: '100%', xs: '50%' },
                }}

            />

        </Box >
    )
}

export default HeroBanner