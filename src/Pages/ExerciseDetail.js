import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box } from '@mui/material';
import { youtubeOptions, exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExercisesVideos from '../components/ExercisesVideos';
import SimilarExericses from '../components/SimilarExericses';




const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideo, setExerciseVideo] = useState([]);
    const [targetExercisesData, setTargetExercisesData] = useState([]);
    const [equipmentExercisesData, setEquipmentExercisesData] = useState([]);


    const { id } = useParams();

    useEffect(() => {

        const FetchexercisesDeta = async () => {

            const exerciseDBUurl = 'https://exercisedb.p.rapidapi.com';
            const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDBUurl}/exercises/exercise/${id}`, exerciseOptions);

            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideo(exerciseVideosData.contents)

            const targetexercisesData = await fetchData(`${exerciseDBUurl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetExercisesData(targetexercisesData);


            const equipmentexercisesData = await fetchData(`${exerciseDBUurl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercisesData(equipmentexercisesData);
        }

        FetchexercisesDeta()


    }, [id])


    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExercisesVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
            <SimilarExericses targetExercisesData={targetExercisesData} equipmentExercisesData={equipmentExercisesData} />
        </Box>
    )
}

export default ExerciseDetail