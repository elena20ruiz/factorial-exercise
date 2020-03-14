
import React from 'react';
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'left'
    }
}));

function EventItem(props) {
    const classes = useStyles();
    return(
        <Paper variant="outlined">
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="body1">{props.description}</Typography>
        </Paper>
    );
}


export default EventItem;