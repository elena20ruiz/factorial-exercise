import React from 'react';
import { makeStyles, Typography, CardContent } from '@material-ui/core';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

const useStyles = makeStyles({
    title: {
        fontSize: '16',
      },
      subtitle: {
          fontSize: '12',
          display: 'flex',
          margin: '0.3em'
      },
});

function EventCardContent(props) {

    const classes = useStyles();

    function renderDate(dateS) {
        const dateSS = dateS.split(' ');
        var result = "";
        for (var i = 0; i < 4; ++i) {
            result += dateSS[i] + " ";
        }
        return result;
    }

    return (
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.element["title"]}
            </Typography>
            <Typography className={classes.subtitle} variant="body2" color="textSecondary" gutterBottom>
                <QueryBuilderIcon fontSize="small" /> {renderDate(props.element["initDate"])}
            </Typography>
            <Typography className={classes.subtitle} variant="body2" color="textSecondary" gutterBottom>
                <WatchLaterIcon fontSize="small" /> {renderDate(props.element["endDate"])}
            </Typography>
            <Typography variant="body2" component="p">
                {props.element["description"]}
            </Typography>
        </CardContent>
    )

}

export default EventCardContent;