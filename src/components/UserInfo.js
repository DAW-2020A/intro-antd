/**
 * Created by chalosalvador on 8/18/20
 */
import React from 'react';
import {Descriptions} from 'antd';

const UserInfo = ( { userData } ) => (
  <>
    <Descriptions title="Información del usuario" bordered>
      <Descriptions.Item label="Nombre">{userData.name}</Descriptions.Item>
      <Descriptions.Item label="Usuario">{userData.username}</Descriptions.Item>
      <Descriptions.Item label="Email">{userData.email}</Descriptions.Item>
      <Descriptions.Item label="Web">{userData.website}</Descriptions.Item>
      <Descriptions.Item label="Teléfono">{userData.phone}</Descriptions.Item>
    </Descriptions>
  </>
);

export default UserInfo;
