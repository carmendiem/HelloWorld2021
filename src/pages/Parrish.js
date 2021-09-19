import React from "react";
import './Parrish.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Parrish = () => {
    return (
        <div className="Parrish">
            <h2>Parrish Library</h2>
            <h3 id="parrishAvailability">Availability</h3>
            <h3 id="parrishFood">Food Options Nearby</h3>
            <h3 id="parrishVolume">Volume Surrounding the Room</h3>
        </div>
    );
}

export default Parrish;