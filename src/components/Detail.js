import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Targetimage from '../assets/images/plank.png'
import EquipmentImage from '../assets/images/squat.png'
import BodyPartImage from '../assets/images/muscle.png'


const Detail = ({ exerciseDetail }) => {


    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [

        {
            id: 1,
            icon: Targetimage,
            name: target,
        },
        {
            id: 2,
            icon: EquipmentImage,
            name: equipment,
        },
        {
            id: 3,
            icon: BodyPartImage,
            name: bodyPart
        }

    ]

    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center', color: { lg: '#000', xs: '#FFD6AE' } }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' }, }} >
                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' }, fontWeight: "700" }}>
                    Exercises keep you strong.<br />
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best exercises to target your {target}. <br /> It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
                {extraDetail?.map((item) => (
                    <Stack key={item.id} direction="row" gap="24px" alignItems="center" sx={{ color: { xs: '#FFD6AE' } }}>
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px', }}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack >

    )
}

export default Detail