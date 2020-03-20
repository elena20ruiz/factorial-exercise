import React from 'react';
import ApiFactory from './api/ApiFactory';
import EventList from './components/List/EventList';
import { makeStyles, Grid, Container } from '@material-ui/core';
import FloatingButton from './components/Button/FloatingButton';
import ModalEvent from './components/Modal/ModalEvent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    margin: '0 auto',
    margin: '2em',
  },
  modal: {
    width: '20em',
    height: '20em'
  },
  eventList: {
    height: '40em'
  },
  floatingButton: {
    position: 'absolute',
    right: '2em',
    bottom: '2em'
  }
}));



function App() {
  const classes = useStyles();
  const [elements, setElements] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [modalAction, setModalAction] = React.useState('edit');
  const [currentElement, setCurrentElement] = React.useState(0);
  React.useEffect(() => {
    getElements();
  }, []);

  function getElements() {
    const getEvents = ApiFactory.get('getEvents');
    getEvents()
      .then((elements) => {
        setElements(elements);
        setError(false);
      })
      .catch((res) => {
        setError(res);
      })
  }

  function handleCloseModal() {
    getElements();
    setModal(false);
    setModalAction(undefined);
  }

  function handleEdit(eventPos) {
    setModal(true);
    setModalAction('edit');
    setCurrentElement(eventPos)
  }

  function handleDelete(pos) {
    const deleteF = ApiFactory.get('deleteEvent');
    deleteF(elements[pos]['id'])
      .then(()  => {
        getElements()
      })
      .catch((err)=> {
        // Show error
      })
  }


  function handleAdd(){
    setModal(true);
    setModalAction('add');
    var e = {
    }
    var elem = elements;
    elem.push(e);
    setElements(elem);
  }

  return (
    <div className={classes.root}>
      {
        (modal && elements.length) &&
          <ModalEvent
            element={elements[currentElement]}
            action={modalAction} 
            onClose={() => handleCloseModal()}/>
      }
      <Container fixed maxWidth="sm" className={classes.container}>
        <div className={classes.eventList}>
          <EventList
            onEdit = {(e) => handleEdit(e)}
            onDelete = {(e) => handleDelete(e)}
            elements={elements} />
        </div>

      </Container>
      <div className={classes.floatingButton}>
        <FloatingButton onClick={()=>handleAdd()}/>
      </div>
    </div>

  );
}

export default App;
