import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/images/right-arrow.png';
import LeftArrowIcon from '../assets/images/left-arrow.png';
import './Style/style.css';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()}>
            <img src={LeftArrowIcon} alt="right" className="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} >
            <img src={RightArrowIcon} alt="left" className="left-arrow" />
        </Typography>
    );
};


const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                    sx={{ width: { xs: '400px' }, height: { xs: '320px' } }}

                >
                    {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />}
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollBar