//https://mui.com/components/cards/, card code sourced from

import React from "react";
import "./Digital.css";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Digital() {
    return (
        <div className="Digital">
            <h2>Digital Humanities Studio</h2>
            <h3 id ="DigitalAvailability">Availability</h3>

            <Card sx={{ minWidth: 100 }}>
                <CardContent id ="DHS"style={{backgroundColor: "#fabeb1"}}>
                    <Typography id ="CSCname" align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                        Digital Humanities Studio
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                        STEW 153
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                        Capacity: 9-12
                    </Typography>
                    <Typography align="left" variant="body2">
                        The Digital Humanities Studio is a mixed-use space dedicated to digital scholarship. The Studio has seating space for 9-12 people for project meetings or workshops. The Studio is also equipped with key technology for projects, including four computers with software such as R, Python, Gephi, ArcGIS, Nvivo, and Abbyy Fine Reader; 3D printing and scanning; a manuscript and book scanner; data visualization monitors; and podcasting station. The room is available for booking related to digital scholarship from 9am-5pm, Monday-Friday.
                    </Typography>
                </CardContent>
            </Card>
            <h3 id ="DHSFood">Food Options Nearby</h3>
            <h3 id ="DHSVolume">Volume In Area</h3>
        </div>
    )
}