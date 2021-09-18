import React from "react";

import STUDYAREA from "../data/locations";
import {Button, Card, CardActions, CardContent, Typography, Chip} from "@material-ui/core";

function WalcStudyArea(props) {
    const {location} = props;
    if (location === undefined) {
        return (
            <div style={{flex: 1}} />
        )
    }
    return (
    <Card style={{margin: 5, flex: 1}}>
                <CardContent>
                    <div style={{display: 'flex'}}>
                        <div style={{maxHeight: 200, maxWidth: 150, overflow: 'hidden'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img src={process.env.PUBLIC_URL + person.picture} alt={'student profile'} height={200}/>
                            </div>
                        </div>
                        <div style={{flex: 1, marginLeft: 10, overflowX: 'auto'}}>
                             <Typography variant={'h5'}>
                                {location.name}
                             </Typography>
                             {location.library ?
                                 <Typography variant={"subtitle2"}>
                                     {location.library}
                                 </Typography> : <></>
                             }
                             {location.addr ?
                                <Typography variant={"subtitle2"}>
                                    {location.addr}
                                </Typography> : <></>
                             }
                             {location.capacity ?
                                 <Typography variant={"body2"}>
                                    {location.capacity}
                                 </Typography> : <></>
                             }
                        </div>
                    </div>
                </CardContent>
    </Card>



    )
}

