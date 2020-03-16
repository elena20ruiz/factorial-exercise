import React from 'react';

import { Grid, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import './App.css';
import EventList from './components/EventList/EventList';
import EventCard from './components/EventCard/EventCard';
import ApiFactory from './api/ApiFactory';

const styles = (theme => ({
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


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      elements: [],
      selected: undefined 
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }

  componentWillMount() {
    const getEvents = ApiFactory.get('getEvents');
    getEvents()
      .then((res) => {
        this.setState({
          elements: res,
          loading: false
        });
      })
      .catch((err) => {
        // Show error
      })
  }

  handleAdd() {

  }

  handleSelected(eventId) {
    console.log('selected:' + eventId);
    this.setState({selected: eventId});
  }

  render() {
    if(this.state.loading) {

      return (<p>loading...</p>)
    }
    return (
      <Grid container
            direction="row" 
            className="App"
      >
        <Grid className={this.props.classes.left} item xs={6}>
          <EventList 
            elements={this.state.elements} 
            handleSelected={(eventId)=> this.handleSelected(eventId)}
          />
        </Grid>
        <Grid className={this.props.classes.right} item xs={6}>
          <div className={this.props.classes.container}>
            <div>
              {
                this.state.selected !== undefined &&
                <EventCard
                  element = {this.state.elements[this.state.selected]}
                />
              }
            </div>
            <div>
              <Fab className={this.props.classes.addButton} color="primary" aria-label="add" >
                <AddIcon />
              </Fab>
            </div>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(App);
