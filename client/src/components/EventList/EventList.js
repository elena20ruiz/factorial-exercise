import React from 'react';
import EventItem from '../EventItem/EventItem';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        overflowY: 'scroll',
        height: 'inherit'
    },
    element: {
        textAlign: 'left',
        maxWidth: '25em',
        margin: '0 auto',
        marginRight: '0.3em',
        paddingTop: '0.25em',
        paddingBottom: '0.25em'
    },
    selectCard: {
        cursor: 'pointer'
    }
}));

function EventList(props) {
    const classes = useStyles();
    const [currentKey, setCurrentKey] = React.useState(0);
    const [selectedItems, setSelectedItems] = React.useState(
        new Array(props.elements.length).fill(false)
    );

    function handleClick(e) {
        var key = e.currentTarget.getAttribute('data-id');
        selectedItems[currentKey] = false;
        selectedItems[key] = true;
        setCurrentKey(key);
        setSelectedItems(selectedItems);
        props.handleSelected(key);
    }

    function renderItems() {
        var output = [];
        for(var i = 0; i < props.elements.length; ++i) {
            output.push(
                <div className={classes.element} key={i}>
                    <a className={classes.selectCard}
                        data-id={i}
                        onClick={(e) => handleClick(e)}
                    >
                        <EventItem 
                            title={ props.elements[i]["title"]}
                            description={ props.elements[i]["description"]}
                            initDate={ props.elements[i]["initDate"]}
                            endDate={ props.elements[i]["endDate"]}
                            selected={selectedItems[i]}
                        />
                    </a>
                </div>
            )
        }
        return output
    }

    return(
        <div
            className={classes.root}
        >
            {renderItems()}
        </div>
    )
}


export default EventList;