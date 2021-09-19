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
                  <CardContent id ="DataVizRoom"style={{backgroundColor: "#fabeb1"}}>
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
                  <CardContent id ="GISLAB"style={{backgroundColor: "#fabeb1"}}>
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

    <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="IntervR2"style={{backgroundColor: "#b1fac5"}}>
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Interview Room
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      WALC 2141
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 1
                    </Typography>
                    <Typography align="left" variant="body2">
                      We have one room, WALC 2141, that is available only to students, only by reservation, and only for virtual interviews or tele-health appointments, Monday - Friday,  8am - 5pm. When not reserved, the room will be locked. Reservations must be made at least 24 hours in advance and for duration of only one hour. Room capacity of one person will be strictly enforced. Please come to the 2nd floor information desk at the time of your reservation to be let into the room.
                      From 5pm - 8am, M-F and on weekends, this room will be available on a first come, first served basis as a study room.
                    </Typography>
                    </CardContent>
                </Card>


        <Card sx={{ minWidth: 100 }}>
                      <CardContent id ="GroupStudy2"style={{backgroundColor: "#fabeb1"}}>
                        <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                          Group Study Rooms
                        </Typography>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          WALC 2020
                        </Typography>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          Capacity: 6 or 8
                        </Typography>
                        <Typography align="left" variant="body2">
                          Located on the first floor of the Humanities, Social Science, and Education Library, the Interview Room is available to patrons looking for a small, quiet space to hold phone interviews or Skype conferences. The Interview Room includes a blackboard and a single small table that fits one or two chairs on each side. No equipment or phone line provided.
                        </Typography>
                        </CardContent>
                    </Card>
        <Card sx={{ minWidth: 100 }}>
                      <CardContent id ="GroupStudy3"style={{backgroundColor: "#b1fac5"}}>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          WALC 3060
                        </Typography>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          Capacity: 6 or 8
                        </Typography>
                        <Typography align="left" variant="body2">
                          Located on the 3rd floor “Bridge” of the Wilmeth Active Learning Center, the WALC 3060 Group Study Room is a space intended for collaborative study and group meetings. This rooms include seating for 8 around a long table, white board, and large screen with HDMI and VGA/aux connections. Please note that study rooms are intended for student use only.
                        </Typography>
                        </CardContent>
                    </Card>
        <Card sx={{ minWidth: 100 }}>
                      <CardContent id ="GroupStudy4"style={{backgroundColor: "#fabeb1"}}>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          WALC 3068
                        </Typography>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          Capacity: 6 or 8
                        </Typography>
                        <Typography align="left" variant="body2">
                          Located on the 3rd floor “Bridge” of the Wilmeth Active Learning Center, the WALC 3068 Group Study Room is a space intended for collaborative study and group meetings. This rooms include seating for 8 around a long table, white board, and large screen with HDMI and VGA/aux connections. Please note that study rooms are intended for student use only.
                        </Typography>
                        </CardContent>
                    </Card>
        <Card sx={{ minWidth: 100 }}>
                      <CardContent id ="GroupStudy5"style={{backgroundColor: "#fabeb1"}}>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          WALC 3076
                        </Typography>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          Capacity: 6 or 8
                        </Typography>
                        <Typography align="left" variant="body2">
                          Located on the 3rd floor “Bridge” of the Wilmeth Active Learning Center, the WALC 3076 Group Study Room is a space intended for collaborative study and group meetings. This rooms include seating for 8 around a long table, white board, and large screen with HDMI and VGA/aux connections. Please note that study rooms are intended for student use only.
                        </Typography>
                        </CardContent>
                    </Card>



            <h3 id ="EngineeringFood">Food Options Nearby</h3>
            <h3 id ="EngineeringVolume">Volume In Area</h3>
        </div>


        )
}
