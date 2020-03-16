import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  

function EventCardEdit(props) {

    const classes = useStyles();
    const [element, setElement] = React.useState({
        'initDate': formatDate(props.element['initDate']),
        'endDate':  formatDate(props.element['endDate']),
        'title': props.element['title'],
        'description': props.element['description']
    });

    function formatDate(d) {
        var date = new Date(d);
        var year = date.getFullYear();
        var month = date.getMonth().toString()
        var day = date.getDay().toString();
        if(day.length === 1) {
            day = '0' + day
        }
        if(month.length  === 1) {
            month = '0' + month;
        }
        var yyyymmdd = year +  '-' + month + '-' +  day;
        return yyyymmdd;
    }

    function handleChange(e) {
        var id = e.target.id;
        var name = e.target.value;
        element[id] = name;
        setElement(element);
    }

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="title"
                label="Title"
                type="text" 
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => handleChange(e)}
                value={element['title']}
            />
            <TextField
                id="initDate"
                label="Init date"
                type="date" 
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => handleChange(e)}
                value={element['initDate']}
            />
            <TextField
                id="initDate"
                label="End date"
                type="date" 
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => handleChange(e)}
                value={element['endDate']}
            />
            <TextField
                id="description"
                label="Description"
                type="text" 
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => handleChange(e)}
                value={element['description']}
            />
        </form>
    )
}

export default EventCardEdit;