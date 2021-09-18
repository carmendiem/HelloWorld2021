import React from "react";
import STUDYAREA from "../data/locations";
import {Button, Card, CardActions, CardContent, Typography, Chip} from "@material-ui/core";

function WalcStudyArea(props) {
    cont {location} = props;
    if (location === undefined) {
        return (
            <div style={{flex: 1}} />
        )
    }
    return (
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
                <Typography variant={"body2"}>
                    {location.addr}
                </Typography> : <></>
            }
            {location.capacity ?
                <Typography variant={"body2"}>
                    {location.capacity}
                </Typography> : <></>
            }
        </div>


    )
}