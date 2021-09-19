import React from "react";
import "./Engineering.css";

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

export default function Engineering() {
    return (
        <div className="Engineering">
            <h2>Library of Engineering and Science</h2>
            <h3 id ="EngineeringAvailability">Availability</h3>

    <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="DataVizRoom">
                    <Typography id ="DVRname" align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Data Viz Room
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      WALC 3049
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 18
                    </Typography>
                    <Typography align="left" variant="body2">
                      The D-VELoP (Data visualization experience lab of Purdue) visualization room has a 3x3 panel display (almost 6’ x 10’ of hi-res screen) in a 18-person classroom/presentation/exhibit room and is part of the that is part of the D-VELoP visualization studio. The room is available for bookings 8am - 5pm, Monday through Friday. However, if you would like to use it in the evening or on the weekends, please contact Amanda Gill for additional information.
                    </Typography>
                  </CardContent>
                </Card>

<Card sx={{ minWidth: 100 }}>
                  <CardContent id ="GISLAB">
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      GIS Lab
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      WALC 3045
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 18
                    </Typography>
                    <Typography align="left" variant="body2">
                      The D-VELoP GIS Lab is an 18-seat computer lab that is part of the D-VELoP (Data visualization experience lab of Purdue) visualization studio. The room is available for bookings 8am - 5pm, Monday through Friday. However, if you would like to use it in the evening or on the weekends, please contact Amanda Gill for additional information.
                    </Typography>
                  </CardContent>
                </Card>

/* <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="IntervR">
                    <Typography id ="CSCname" align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Interview Room
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      HSSE 147
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 4
                    </Typography>
                    <Typography align="left" variant="body2">
                      "Located on the first floor of the Humanities, Social Science, and Education Library, the Interview Room is available to patrons looking for a small, quiet space to hold phone interviews or Skype conferences. The Interview Room includes a blackboard and a single small table that fits one or two chairs on each side. No equipment or phone line provided.
                    </Typography>
                    </CardContent>
                </Card>


            <h3 id ="HSSEFood">Food Options Nearby</h3>
            <h3 id ="HSSEVolume">Volume In Area</h3> */
        </div>


        )
}
