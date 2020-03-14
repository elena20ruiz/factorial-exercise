import React from 'react';
import { Card, makeStyles, CardContent, Typography, CardActions, Fab, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

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
      fontSize: 16,
    },
    subtitle: {
        fontSize: 12,
        display: 'flex',
        margin: '0.3em'
    },
    bottom: {
        marginBottom: 12,
    },
    button: {
        margin: '0 auto',
        marginRight: '0'
    }
  });

function EventCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}  variant="outlined">
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                <QueryBuilderIcon  fontSize="small" /> Init date
            </Typography>
            <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
                <WatchLaterIcon fontSize="small" /> End date
            </Typography>
            <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
            </CardContent>
            <CardActions classes={classes.bottom}>
                <IconButton className={classes.button}>
                    <EditIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}


export default EventCard;