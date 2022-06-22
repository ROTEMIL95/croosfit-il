import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercies from '../components/SearchExercies';
import HeroBanner from '../components/HeroBanner';

const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);


    return (
        <Box>
            <HeroBanner />
            <SearchExercies
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
            <Exercises exercises={exercises}
                bodyPart={bodyPart}
                setExercises={setExercises} />
        </Box>
    )
}

export default Home