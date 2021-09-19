import React from "react";

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
                  <CardContent id ="HollisterConferenceRoom">
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
                  <CardContent id ="FinancialConferenceRoom">
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
                  <CardContent id ="LearnLab">
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
                      <CardContent id ="CorporateStudyRoom">
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

