import React from 'react';
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, IconButton } from '@material-ui/core';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'inherit',
        padding: '1em'
    },
    infoContainer: {
        '& > p': {
            margin: '0 auto',
            display: 'flex',
            marginTop: '0.5em'
        }
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
}));


function EventCard(props) {
    const classes = useStyles();

    function renderDate(dateS) {
        const dateSS = dateS.split(' ');
        var result = "";
        for (var i = 0; i < 4; ++i) {
            result += dateSS[i] + " ";
        }
        return result;
    }


    function handleEdit() {
        props.onEdit(props.pos);
    }

    function handleDelete() {
        props.onDelete(props.pos);
    }


    var title = 'Title';
    var description = 'Description';
    var initDate = 'Init Date';
    var endDate = 'End Date';

    if('title' in props.element) {
        title = props.element['title']
    }
    if('description' in props.element) {
        description = props.element['description']
    }
    if('initDate' in props.element) {
        initDate = renderDate(props.element['initDate'])
    }
    if('endDate' in props.element) {
        endDate = renderDate(props.element['endDate'])
    }

    return (
        <Paper
            className={classes.root}
            variant="outlined"
        >
            <Grid container direction="column">
                <Grid item className={classes.infoContainer}>
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body2">
                        <QueryBuilderIcon fontSize="small" />{initDate}
                        &nbsp; 	&nbsp;
                        <WatchLaterIcon fontSize="small" /> {endDate}
                    </Typography>
                    <Typography variant="body1">{description}</Typography>
                </Grid>
                <Grid item className={classes.buttonContainer}>
                    <IconButton onClick={(e) => handleDelete(e)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EditIcon onClick={(e) => handleEdit(e)}/>
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}


export default EventCard;