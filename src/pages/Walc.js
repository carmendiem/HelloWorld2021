import React from "react";
import "./Walc.css"

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
export default function Walc() {
    return (
        <div className="Walc">
            <h2>WALC </h2>
            <h3 id ="WALCAvailability">Availability</h3>

    <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="DigSchLA">
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Digital Scholars Lab - A
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      WALC 3007
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 5
                    </Typography>
                    <Typography align="left" variant="body2">
                      'Located on the third floor of the Wilmeth Active Learning Center in Room 3007. This room can seat 5 at the conference table. The space includes a large television with laptop compatibility and large whiteboard. This space is intended for Data Science Consulting Services. This room has a door that may be closed for the duration of the session.
                      </Typography>
                  </CardContent>
                </Card>

<Card sx={{ minWidth: 100 }}>
                  <CardContent id ="DigSchLC">
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Digital Scholars Lab - C
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      WALC 3007
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 4
                    </Typography>
                    <Typography align="left" variant="body2">
                      'Located on the third floor of the Wilmeth Active Learning Center room 3007. This room is available to patrons to book for cooperative small group study. The space includes a table, 4 chairs, and power for laptops.
                      </Typography>
                  </CardContent>
                </Card>

<Card sx={{ minWidth: 100 }}>
                  <CardContent id ="DigSchLD">
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Digital Scholars Lab - D
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      WALC 3007
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 4
                    </Typography>
                    <Typography align="left" variant="body2">
                      'Located on the third floor of the Wilmeth Active Learning Center room 3007. This room is available to patrons to book for cooperative small group study. The space includes a table, 4 chairs, a whiteboard, and power for laptops.
                    </Typography>
                    </CardContent>
                </Card>

<Card sx={{ minWidth: 100 }}>
                  <CardContent id ="DigSchLCONF">
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Digital Scholars Lab - Conf. Circle
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      WALC 3007
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 14
                    </Typography>
                    <Typography align="left" variant="body2">
                      'Located on the third floor of the Wilmeth Active Learning Center room 3007. The Conference circle has a high tech meeting space. It will seat 8 at the conference table and 6 additional seats behind the primary seating circle. The room features a large television with laptop compatibility.
                    </Typography>
                    </CardContent>
                </Card>

            <h3 id ="WALCFood">Food Options Nearby</h3>
            <h3 id ="WALCVolume">Volume In Area</h3>
        </div>


        )
}