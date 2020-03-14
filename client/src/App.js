import React, { Component } from 'react';

import { Grid, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import './App.css';
import EventList from './components/EventList/EventList';
import EventCard from './components/EventCard/EventCard';

const useStyles = makeStyles(theme => ({
  left: {
    padding: '2em',
    height: 'inherit'
  },
  right: {
    padding: '2em'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    '& > *': {
      display: 'flex'
    }
  },
  addButton: {
    margin: '0 auto',
    marginRight: '2em'
  }
}));


function App() {
  const classes = useStyles();
    return (
      <Grid container
            direction="row" 
            className="App"
      >
        <Grid className={classes.left} item xs={6}>
          <EventList />
        </Grid>
        <Grid className={classes.right} item xs={6}>
          <div className={classes.container}>
            <div>
              <EventCard />
            </div>
            <div>
              <Fab className={classes.addButton} color="primary" aria-label="add" >
                <AddIcon />
              </Fab>
            </div>
          </div>
        </Grid>
      </Grid>
    );
}

export default App;
