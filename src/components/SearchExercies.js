import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
import './Style/style.css';


const SearchExercies = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])


    useEffect(() => {

        const FetchexercisesDeta = async () => {

            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

            setBodyParts(['all', ...bodyPartData])

        }

        FetchexercisesDeta();


    }, [])





    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log(exercisesData)

            const SearchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('')
            setExercises(SearchedExercises);
        }

    }



    return (

        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px"
        >
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb="50px" textAlign="center"
                color="#FFD6AE"
            >
                Awesome Exercises You
                <br />
                Should know
            </Typography>
            <Box position="relative" mb="72px" className="search-box">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },

                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}

                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn"
                    sx={{
                        bgcolor: '#F64B29',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '100px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        position: "absolute",
                        height: "56px",
                        right: '0'
                    }}
                    onClick={handleSearch}
                >Search</Button>
            </Box>
            <Box
                sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
            </Box>
        </Stack>
    )
}

export default SearchExercies