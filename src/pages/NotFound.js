/**
 * Created by chalosalvador on 8/25/20
 */

import React from 'react';
import { Button, Result } from 'antd';
import Icon from '@ant-design/icons';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { ReactComponent as ImageCustom } from '../images/logo.svg';

const NotFound = () => (
  <Result
    icon={ <Icon component={ ImageCustom} /> }
    status='404'
    title='404'
    subTitle='Página no encontrada'
    extra={ <Link to={ Routes.HOME }><Button type='primary'>Ir al inicio</Button></Link> }
  />
);

export default NotFound;
