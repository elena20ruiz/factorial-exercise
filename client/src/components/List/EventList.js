
import React from 'react';
import { makeStyles } from '@material-ui/core';
import EventCard from '../Card/EventCard';

const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'auto',   
        overflowY: 'scroll',
        height: 'inherit'
    },
    element: {
        textAlign: 'left',
        margin: '0 auto',
        paddingTop: '0.25em',
        paddingBottom: '0.25em'
    },
    selectCard: {
        cursor: 'pointer'
    }
}));

function EventList(props) {
    const classes = useStyles();
    
    function renderItems() {
        var output = [];
        for(var i = 0; i < props.elements.length; ++i) {
            output.push(
                <div className={classes.element} key={i}>
                        <EventCard
                            pos = {i}
                            element = {props.elements[i]}
                            onEdit = {props.onEdit}
                            onDelete = {props.onDelete}
                        />
                </div>
            )
        }
        return output;
    }

    if (props.elements.length === 0) {
        return (
            <p>You don't have any event</p>
        )
    }

    return (
        <div className={classes.root}>
            {renderItems()}
        </div>
    )
}


export default EventList;