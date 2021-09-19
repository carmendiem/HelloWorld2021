//https://mui.com/components/cards/, card code sourced from

import React from "react";
import "./Parrish.css";


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
export default function Parrish() {
    return (
        <div className="Parrish">
            <h2>Parrish Library</h2>
            <h3 id ="parrishAvailability">Availability</h3>

    <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="HollisterConferenceRoom"style={{backgroundColor: "#b1fac5"}}>
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Collaboration Study Center
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      KRAN 202
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 24
                    </Typography>
                    <Typography align="left" variant="body2">
                      This medium conference room is well-suited for meetings. It contains a conference table surrounded by 12 chairs with 12 additional chairs available. The room also features an instructor station, large screen monitor, and small kitchenette with a fridge and counter-top. This room is also set up for BoilerCast audio capture.
                    </Typography>
                  </CardContent>
                </Card>

    <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="FinancialConferenceRoom"style={{backgroundColor: "#fabeb1"}}>
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Financial Conference Room
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      KRAN 230A
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 21
                    </Typography>
                    <Typography align="left" variant="body2">
                       This conference room seats 11 at the conference table and 10 additional seats are available in the room. The room includes a flat-panel display and webcam with laptop compatibility. Please include any specific needs in your reservation request.
                     </Typography>
                  </CardContent>
                </Card>

    <Card sx={{ minWidth: 100 }}>
                  <CardContent id ="LearnLab"style={{backgroundColor: "#b1fac5"}}>
                    <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                      Learn Lab
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      KRAN 250
                    </Typography>
                    <Typography align="left" sx={{ mb: 1.5 }} color="black">
                      Capacity: 40
                    </Typography>
                    <Typography align="left" variant="body2">
                      The Parrish Library houses the Learn Lab, a medium computer lab designed for innovative multimedia instruction. The Lab contains 40 computer terminals, 1 instructor station, 3 flat panel screens, and multiple dry erase boards. This room will also support video conferencing and is set up for BoilerCast. When not reserved, the space becomes an open lab for students.
                    </Typography>
                    </CardContent>
                </Card>

    <Card sx={{ minWidth: 100 }}>
                      <CardContent id ="CorporateStudyRoom"style={{backgroundColor: "#fabeb1"}}>
                        <Typography align="left" sx={{ fontSize: 20 }} color="black" gutterBottom>
                          Corporate Study Room
                        </Typography>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          KRAN 258/260
                        </Typography>
                        <Typography align="left" sx={{ mb: 1.5 }} color="black">
                          Capacity: 35
                        </Typography>
                        <Typography align="left" variant="body2">
                          This room is composed of two conjoined rooms and is suited for receptions and conferences. KRAN 258 features an open layout with three small tables, several study carrels, and casual seating. KRAN 260 resembles a more traditional meeting space with two large conference tables each seating 10. Counters are available for catering.
                        </Typography>
                        </CardContent>
                    </Card>


            <h3 id ="parrishFood">Food Options Nearby</h3>
            <h3 id ="parrishVolume">Volume In Area</h3>

        </div>


        )
}
