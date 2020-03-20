import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
    root: {
        
    }
}));

function FloatingButton(props) {
    const classes = useStyles();
    return (
        <Fab className={classes.root} onClick={props.onClick}>
            <AddIcon />
        </Fab>
    )
}


export default FloatingButton;