
import React from 'react';
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0.35em',
        '& > p': {
            margin: '0 auto',
            display: 'flex'
        }
    }
}));

function EventItem(props) {
    const classes = useStyles();

    function renderDate(dateS) {
        const dateSS = dateS.split(' ');
        var result = "";
        for(var i = 0; i < 4; ++i) {
            result += dateSS[i] + " ";
        }
        return result;
    }

    var backgroundColor = 'inherit';
    var color = 'black';
    if(props.selected) {
        backgroundColor = '#3f51b5';
        color = 'white';
    }

    return(
        <Paper  
            className={classes.root} 
            variant="outlined"
            style={{backgroundColor: backgroundColor, color: color}}
        >
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="body2">
                <QueryBuilderIcon  fontSize="small" />{renderDate(props.initDate)}
                &nbsp; 	&nbsp;
                <WatchLaterIcon fontSize="small" /> {renderDate(props.endDate)}
            </Typography>
        </Paper>
    );
}


export default EventItem;