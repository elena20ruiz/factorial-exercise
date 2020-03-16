import React from 'react';
import { Card, makeStyles, CardContent, CardActions, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';



import EventCardContent from './EventCardContent';
import EventCardEdit from './EventCardEdit';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 300,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1em'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '16',
    },
    subtitle: {
        fontSize: '12',
        display: 'flex',
        margin: '0.3em'
    },
    cardBottom: {
        marginBottom: '12px',
    },
    button: {
        margin: '0 auto',
        marginRight: '0'
    }
});

function EventCard(props) {
    const classes = useStyles();
    const [edit, setEdit] = React.useState(false);
    const [currentElement, setCurrentElement] = React.useState(props.element)

    function handleEdit() {
        setEdit(true);
    }

    function handleChange() {

    }

    function handleSave() {

        // Call api

        // Go to no edit
        setEdit(false);
    }

    function handleCancel() {

    }

    return (
        <Card className={classes.root} variant="outlined">
            {
                edit ?
                    <EventCardEdit 
                        element={currentElement}
                        onChange={(e) => handleChange(e)} 
                    /> :
                    <EventCardContent element={currentElement} />
            }
            {
                edit ?
                    <CardActions className={classes.cardBottom}>
                        <IconButton className={classes.button}>
                            <CloseIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleSave()}
                            className={classes.button}
                        >
                            <CheckIcon />   
                        </IconButton>
                    </CardActions> :
                    <CardActions className={classes.cardBottom}>
                        <IconButton className={classes.button}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleEdit()}
                            className={classes.button}
                        >
                            <EditIcon />
                        </IconButton>
                    </CardActions>
            }
        </Card>
    )
}


export default EventCard;