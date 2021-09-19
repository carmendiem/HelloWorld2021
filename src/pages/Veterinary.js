//https://mui.com/components/cards/, card code sourced from

import React from "react";

import "./Veterinary.css"

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

export default function Veterinary() {
    return (
        <div className="Veterinary">
            <h2>Veterinary Medicine Library</h2>
            <h3 id ="VETAvailability">Availability</h3>

    <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="FrstFlrStdyRoom" style={{backgroundColor: "#b1fac5"}}>
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      First Floor Study Room
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      1133G, 1133H, 1133J, 1133K
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 5
                    </Typography>
                    <Typography align="left" variant="body2">
                      Located on the first floor of Lynn Hall, in the Veterinary Medical Library, are 4 small group study rooms, 1133G, 1133H, 1133J, and 1133K. These study spaces are intended for cooperative study, and group meetings. The room may be scheduled for 1-2 hour sessions, accommodates up to 5 people, and has an available chalk board.                    </Typography>
                  </CardContent>
                </Card>

            <h3 id ="VETFood">Food Options Nearby</h3>
            <h3 id ="VETVolume">Volume In Area</h3>
        </div>


        )
}