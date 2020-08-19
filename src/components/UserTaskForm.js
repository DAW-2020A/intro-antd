/**
 * Created by chalosalvador on 8/18/20
 */
import React from 'react';
import { Input, Button } from 'antd';
import { UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';


const UserTaskform = ( { onAddTask } ) => (
  <div>
    <Input style={ { width: 350 } }
           id='task'
           size='large'
           placeholder='Ingrese el nombre de la tarea'
           prefix={ <UnorderedListOutlined /> } />


    <Button type='primary' onClick={ onAddTask } icon={ <PlusOutlined /> } />
  </div>
);

export default UserTaskform;
