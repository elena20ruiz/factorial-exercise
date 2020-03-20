import React from 'react';
import { DialogContent , DialogActions, TextField, Dialog, DialogTitle, Button } from '@material-ui/core';
import ApiFactory from '../../api/ApiFactory';


function ModalEvent(props) {
    const [element, setElement] = React.useState([]);

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
        setElement({...element, [id]: value})
    }


    function handleCancel() {
        props.onClose();
    }

    function handleSave() {
        var f;
        if (props.action == 'add') f = 'addEvent';
        else f = 'updateEvent';
        
        const actionEvent = ApiFactory.get(f);
        actionEvent(element)
            .then((res)=> {
                props.onClose();
            })  
            .catch((res)=> {
                // Show error
            });
    }

    return (
        <Dialog open={true} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Event</DialogTitle>
            <DialogContent>
                <TextField
                    id="title"
                    label="Title"
                    type="text"
                    onChange={handleChange}
                    value={element['title']}

                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="initDate"
                    label="Init date"
                    type="date"
                    onChange={handleChange}
                    value={element['initDate']}

                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="endDate"
                    label="End Date"
                    type="date"
                    onChange={handleChange}
                    value={element['endDate']}

                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="description"
                    label="Description"
                    type="text"
                    onChange={handleChange}
                    value={element['description']}

                    fullWidth
                    variant="outlined"
                />
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