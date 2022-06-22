import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/footer.png';
import './Style/style.css';


const Footer = () => {
    return (
        <Box mt="50px" direction="row" color="#FFD6AE" sx={{ fontWeight: "bold", borderTop: "2px solid " }} >
            <Stack alignItems="center" marginTop="0px" >
                <Typography variant="h5" mb="30px" marginTop="10px">
                    made by 🤙  IL-DEVELOPER
                </Typography>
            </Stack>
        </Box >
    )
}

export default Footer