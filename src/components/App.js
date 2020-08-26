import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navigation from './Navigation';
import AppRouter from '../routers/AppRouter';
import { Layout } from 'antd';
import logo from '../images/logo-menta.png';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Router>
    <Layout className='layout'>
      <Header className='main-header'>
        <div className='logo'>
          <img src={ logo } alt='Logo' height={ 40 } />
        </div>
        <Navigation />
      </Header>

      <Content className='main-content'>
        <AppRouter />
      </Content>

      <Footer className='footer'>
        <div className='logo'>
          <img src={ logo } alt='Logo' height={ 40 } />
        </div>
      </Footer>
    </Layout>
  </Router>
);

export default App;
