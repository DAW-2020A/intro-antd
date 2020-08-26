/**
 * Created by chalosalvador on 8/25/20
 */
import React, { useEffect, useState } from 'react';
import '../styles/App.less';
import UserInfo from '../components/UserInfo';
import UserTasksList from '../components/UserTasksList';
import UserTaskForm from '../components/UserTaskForm';
import { Button, message, Modal, Row, Col } from 'antd';
import '../styles/tasks.css';

function Tasks() {
  const [ list, setList ] = useState( [] );
  const [ userId, setUserId ] = useState( 1 );
  const [ userData, setUserData ] = useState( null );
  const [ isLoading, setIsLoading ] = useState( true );
  const [ showCreateTaskModal, setShowCreateTaskModal ] = useState( false );

  useEffect( () => {

    const getUser = async() => {
      const data = await fetch( `https://jsonplaceholder.typicode.com/users/${ userId }` );
      const jsonUser = await data.json();
      console.log( 'user', jsonUser );

      setUserData( jsonUser );
    };
    getUser();

    const getList = async() => {
      const data = await fetch( `https://jsonplaceholder.typicode.com/users/${ userId }/todos` );
      const jsonList = await data.json();
      console.log( 'list', jsonList );

      setList( jsonList );
      setIsLoading( false );
    };
    getList();
  }, [ userId ] );

  const handleAddTask = () => {
    const title = document.querySelector( '#task' ).value;
    setList( prevState => [
      ...prevState, {
        title,
        completed: false
      }
    ] );
    document.querySelector( '#task' ).value = '';
  };

  const handleDeleteTask = ( index ) => {
    setList( ( prevState ) => {
      return prevState.filter( ( task, i ) => i !== index );
    } );
  };

  const handleCompleteTask = ( index ) => {
    setList( ( prevState ) => {
      const listUpdated = [ ...prevState ];
      listUpdated[ index ].completed = true;
      return listUpdated;
    } );

    message.success( 'Felicitaciones has completado tu tarea :D' );
  };

  const handlePrevUser = () => {
    setUserId( ( prevUserId ) => prevUserId - 1 );
  };

  const handleNextUser = () => {
    setUserId( ( prevUserId ) => prevUserId + 1 );
  };

  return (
    <>
      <Row type='flex' justify='space-between'>
        <Col>
          <Button type='primary' disabled={ userId < 2 } onClick={ handlePrevUser }>Anterior usuario</Button>
        </Col>
        <Col>
          <Button type='primary' disabled={ userId >= 10 } onClick={ handleNextUser }>Siguiente usuario</Button>
        </Col>
      </Row>


      {
        userData
          ? <UserInfo userData={ userData } />
          : 'Cargando...'
      }

      <Row style={ {
        marginTop: 40,
        marginBottom: 20
      } }>
        <Col>
          <Button type='primary' onClick={ () => setShowCreateTaskModal( true ) }>Nueva tarea</Button>
          <Button danger onClick={ () => setList( [] ) }>Eliminar todas las tareas</Button>
        </Col>
      </Row>


      <UserTasksList list={ list }
                     onCompleteTask={ handleCompleteTask }
                     onDeleteTask={ handleDeleteTask }
                     isLoading={ isLoading }
      />


      <Modal
        title='Crear una nueva tarea'
        visible={ showCreateTaskModal }
        footer={ null }
        onCancel={ () => setShowCreateTaskModal( false ) }
      >
        <UserTaskForm onAddTask={ handleAddTask } />
      </Modal>
    </>
  );
}

export default Tasks;
