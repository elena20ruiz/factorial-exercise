import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DialogContent, DialogActions, TextField, Dialog, DialogTitle, Button } from '@material-ui/core';
import ApiFactory from '../../api/ApiFactory';

const useStyles = makeStyles(theme => ({
    field: {
        marginTop: '1em'
    },
    errorMsg : {
        color: 'white',
        display: 'block',
        backgroundColor: theme.palette.error.light,
        padding: '0.5em',
        borderRadius: '5px'
    }
}));

function ModalEvent(props) {

    const classes = useStyles();

    const [element, setElement] = React.useState([]);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        // Format dates
        var e = {
            'id': props.element['id'],
            'title': props.element['title'],
            'description': props.element['description'],
            'initDate': formatDate(props.element['initDate']),
            'endDate': formatDate(props.element['endDate'])
        }
        setElement(e)
    }, [])


    function formatDate(d) {
        var date = new Date(d);
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString()
        var day = date.getDate();
        if (day < 10) {
            console.log(day)
            day = '0' + day
        }
        if (month < 10) {
            month = '0' + month;
        }
        var yyyymmdd = year + '-' + month + '-' + day;
        return yyyymmdd;
    }

    function handleChange(e) {
        var id = e.target.id;
        var value = e.target.value;
        setElement({ ...element, [id]: value })
    }


    function handleCancel() {
        props.onClose();
    }

    function handleSave() {

        // Check input: 
        if (!element.title || !element.initDate || !element.endDate) {
            setError('Title, Init Date and End Date are required');
            return;
        }

        // Check dates
        var d1 = new Date(element.initDate);
        var d2 = new Date(element.endDate);
        if (d1 > d2) {
            setError('Init day has to be lower than end date');
            return;
        }

        var f;
        if (props.action == 'add') f = 'addEvent';
        else f = 'updateEvent';

        const actionEvent = ApiFactory.get(f);
        actionEvent(element)
            .then(() => {
                setError(false);
                props.onClose();
            })
            .catch((res) => {
                // Show error
                setError(res);
            });
    }

    return (
        <Dialog open={true} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Event</DialogTitle>
            <DialogContent>
                {
                    error &&
                    <label className={classes.errorMsg}>
                        {error}
                    </label>
                }
                <form>
                    <TextField
                        id="title"
                        label="Title"
                        type="text"
                        onChange={handleChange}
                        value={element['title']}

                        fullWidth
                        variant="outlined"
                        className={classes.field}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="initDate"
                        label="Init date"
                        type="date"
                        onChange={handleChange}
                        value={element['initDate']}
                        fullWidth
                        variant="outlined"
                        className={classes.field}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="endDate"
                        label="End Date"
                        type="date"
                        onChange={handleChange}
                        value={element['endDate']}
                        fullWidth
                        variant="outlined"
                        className={classes.field}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="description"
                        label="Description"
                        type="text"
                        onChange={handleChange}
                        value={element['description']}
                        fullWidth
                        variant="outlined"
                        className={classes.field}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleSave} color="primary">
                    Save
            </Button>
            </DialogActions>
        </Dialog>
    )
}


export default ModalEvent;