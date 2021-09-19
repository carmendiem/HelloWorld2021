import React from "react";


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

/*const HSSE = () => {
    return (
        <div className="HSSE">
            <h2>HSSE Library</h2>


            <h3 id ="HSSEAvailability">Availability</h3>
            <h3 id ="HSSEFood">Food Options Nearby</h3>
            <h3 id ="HSSEVolume">Volume In Area</h3>
        </div>


    );
}
*/
export default function HSSE() {
    return (
        <div className="HSSE">
            <h2>HSSE Library</h2>
            <h3 id ="HSSEAvailability">Availability</h3>

    <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="CollabStudyCent">
                    <Typography id ="CSCname" align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Collaboration Study Center
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      HSSE 142
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 28
                    </Typography>
                    <Typography align="left" variant="body2">
                      Located on the first floor of the Humanities, Social Science, and Education Library, the Collaborative Study Center is a medium study space intended for cooperative study and instruction. The CSC includes 8 computer terminals and 10 desks, for a total of 28 seats. A projector and instructor station are also available.
                    </Typography>
                  </CardContent>
                </Card>

<Card sx={{ minWidth: 100 }}>
                  <CardContent id ="GroupStudy">
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Group Study Room
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      HSSE 145
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 8
                    </Typography>
                    <Typography align="left" variant="body2">
Located on the first floor of the Humanities, Social Science, and Education Library, the HSSE 145 Group Study Room is a study space intended for cooperative study and group meetings. The room includes a large table area with 8 seats and whiteboard.                    </Typography>
                  </CardContent>
                </Card>

<Card sx={{ minWidth: 100 }}>
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
            <h3 id ="HSSEVolume">Volume In Area</h3>
        </div>


        )
}