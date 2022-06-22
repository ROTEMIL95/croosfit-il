import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './Style/style.css';


const ExercisesVideos = ({ name, exerciseVideo }) => {

    return (
        <Box sx={{ marginTop: { lg: '150px', xs: '20px' }, p: '20px', fontSize: { lg: '18px', xs: '12px' } }} >
            <Typography variant="h2" mb={5} sx={{ fontSize: { lg: '26px', xs: '24px' }, color: "#FFD6AE" }} >
                Watch <span style={{ color: '#ff2625', textTransform: "capitalize" }}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent="center" flexWrap="wrap" alignItems="center"
                sx={{ flexDirection: { lg: 'row' }, gap: { lg: '100px', xs: '20px' } }} >
                {exerciseVideo?.slice(0, 3).map((item, index) => (
                    <a
                        key={item.index}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant="h6" color="#FFD6AE" >
                                {item.video.title}
                            </Typography>
                            <Typography variant="h7" color="#FFD6AE" sx={{ marginTop: "10px" }}>
                                {item.video.viewCountText}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExercisesVideos