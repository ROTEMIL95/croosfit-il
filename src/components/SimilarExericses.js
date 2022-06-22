import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';


const SimilarExericses = ({ equipmentExercisesData, targetExercisesData }) => {
    return (
        <Box sx={{ mt: { lg: '100px', }, p: { xs: '20px' } }}>
            <Typography variant="h4" mb={7} sx={{ fontSize: { xs: '24px' }, color: "#FFD6AE", p: { xs: '5px' }, marginTop: { xs: '20px' } }}>
                Exercises that <span style={{ color: '#ff2625', textTransform: "capitalize" }}>target</span> the same muscle group
            </Typography>
            <Stack sx={{ pb: '20px', position: 'relative' }} direction="row">
                {targetExercisesData.length ? <HorizontalScrollBar data={targetExercisesData} /> : <Loader />}
            </Stack>
            <Typography variant="h4" mt={10} sx={{ fontSize: { xs: '24px' }, marginTop: "200px", color: "#FFD6AE" }}>
                Exercises that use the same <span style={{ color: '#ff2625', textTransform: "capitalize" }}>equipment</span>
            </Typography>
            <Stack sx={{ pb: '20px', position: 'relative', marginTop: '50px' }} direction="row">
                {equipmentExercisesData.length ? <HorizontalScrollBar data={equipmentExercisesData} /> : <Loader />}
            </Stack>
        </Box >
    )
}

export default SimilarExericses
