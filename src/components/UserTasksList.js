/**
 * Created by chalosalvador on 8/18/20
 */
import React from 'react';
import { Table, Button, Tag, Empty } from 'antd';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';

export const normalizeString = ( string ) => (
  string
    .trim()
    .toLowerCase()
    .replace( 'á', 'a' )
    .replace( 'Á', 'A' )
    .replace( 'é', 'e' )
    .replace( 'É', 'E' )
    .replace( 'í', 'i' )
    .replace( 'Í', 'I' )
    .replace( 'ó', 'o' )
    .replace( 'Ó', 'O' )
    .replace( 'ú', 'u' )
    .replace( 'Ú', 'U' )
    .replace( 'ñ', 'n' )
    .replace( 'Ñ', 'N' )
);

const UserTasksList = ( { list, onCompleteTask, onDeleteTask, isLoading } ) => {

  const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      sorter: ( a, b ) => normalizeString( a.title ) < normalizeString( b.title )
        ? -1
        : 1,
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      sorter: ( a, b ) => a.status - b.status,
      render: ( status, task ) => <Tag color={ status
        ? 'green'
        : 'orange' } key={ task.id }>{ status
        ? 'Completada'
        : 'Pendiente' }
      </Tag>
    },
    {
      title: 'Acciones',
      dataIndex: 'actions',
      key: 'actions',
    },
  ];

  const data = list.map( ( task, index ) => {
    return {
      key: index,
      title: task.title,
      status: task.completed,
      actions:
        <>
          { !task.completed && <Button icon={ <CheckOutlined /> } onClick={ () => onCompleteTask( index ) } /> }
          <Button danger icon={ <DeleteOutlined /> } onClick={ () => onDeleteTask( index ) } />
        </>
    };
  } );

  const emptyComponent = () => (
    <Empty
      image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
      imageStyle={ {
        height: 60,
      } }
      description={
        <span>
        No tienes tareas ;)
      </span>
      }
    >
      <Button type='primary'>Crea un tarea</Button>
    </Empty>
  );

  return (
    <>
      <Table columns={ columns }
             dataSource={ data }
             locale={ {
               emptyText: emptyComponent
             } }
             loading={ isLoading }
      />
    </>
  );
};

export default UserTasksList;
