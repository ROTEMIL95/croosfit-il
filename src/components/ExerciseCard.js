import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`} className="exerciseCard">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: '21px', color: '#000', background: '#ffa9a9',
                        fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', textDecoration: 'none',
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '21px', color: '#000', background: '#fcc757',
                        fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize', textDecoration: 'none',
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography sx={{
                color: '#000', fontSize: '18px',
                fontWeight: 'bold', ml: '22px', textTransform: 'capitalize', mt: '10px', pb: '10px'
            }}>
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard