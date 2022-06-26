import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';




const Exercises = ({ exercises, bodyPart, setExercises }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const Paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }



    useEffect(() => {

        const fetchEXercisesData = async () => {
            let exercisesData = [];
            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData)

        }
        fetchEXercisesData();
    }, [bodyPart])

    return (
        <Box id="exercises"
            sx={{ mt: { lg: '110px', xs: '50px' } }}
            mt="50px"
            p="20px"
        >
            <Typography variant="h4" mb="46px" color="#FFD6AE" sx={{ fontSize: { xs: '20px' } }}>
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { lg: '110px', xs: '50px' } }}
                flexWrap="wrap" justifyContent="center">

                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack ml="10px" mt="40px" alignItems="center"
            >
                {exercises.length > 9 && (
                    <Pagination
                        defaultPage={1}
                        count={Math.ceil(exercises.length / 9)}
                        page={currentPage}
                        onChange={Paginate}
                        size="large"
                        color="primary"
                    />


                )}
            </Stack>
        </Box >

    )
}


export default Exercises