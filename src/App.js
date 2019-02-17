import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Layout } from 'antd'

import DefaultRouter from 'modules/defaultRouter'

import Navigation from './modules/navigation/navigation'

import './App.css'

const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header className="Header">
            <Navigation />
          </Header>
          <Layout>
            <Content className="Content">
              <Route to='/*' component={DefaultRouter} />
            </Content>
          </Layout>
          <Footer className="Footer">
            &copy; Accenture Latvia 2019
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
