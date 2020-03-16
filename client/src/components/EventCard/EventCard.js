import React from 'react';
import { Card, makeStyles, CardContent, Typography, CardActions, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
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


    function renderDate(dateS) {
        const dateSS = dateS.split(' ');
        var result = "";
        for(var i = 0; i < 4; ++i) {
            result += dateSS[i] + " ";
        }
        return result;
    }

    return (
        <Card className={classes.root}  variant="outlined">
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.element["title"]}
            </Typography>
            <Typography className={classes.subtitle} variant="body2"  color="textSecondary" gutterBottom>
                <QueryBuilderIcon  fontSize="small" /> {renderDate(props.element["initDate"])}
            </Typography>
            <Typography className={classes.subtitle} variant="body2" color="textSecondary" gutterBottom>
                <WatchLaterIcon fontSize="small" /> {renderDate(props.element["endDate"])}
            </Typography>
            <Typography variant="body2" component="p">
                {props.element["description"]}
            </Typography>
            </CardContent>
            <CardActions className={classes.cardBottom}>
                <IconButton className={classes.button}>
                    <DeleteIcon />
                </IconButton>
                <IconButton className={classes.button}>
                    <EditIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}


export default EventCard;