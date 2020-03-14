import React from 'react';
import EventItem from '../EventItem/EventItem';
import { makeStyles, Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        overflowY: 'scroll',
        height: 'inherit'
    },
    element: {
        maxWidth: '25em',
        margin: '0 auto',
        marginRight: '0.3em',
        paddingTop: '0.25em',
        paddingBottom: '0.25em'
    }
}));

function EventList() {
    const classes = useStyles();

    function renderItems() {
        var output = [];
        for(var i = 0; i < 10; ++i) {
            output.push(
                <div className={classes.element}>
                    <EventItem title="Doctor" description="You have to go to doctor" />
                </div>
            )
        }
        return output
    }

    return(
        <div
            className={classes.root}
        >
            {renderItems()}
        </div>
    )
}


export default EventList;