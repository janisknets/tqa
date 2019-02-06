import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Navigation from './modules/navigation/navigation'
import Home from './modules/home/home'
import Questions from './modules/questions/displayQuestion/questions'

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
              <div className="Content-box">
                <Route exact path="/" component={Home} />
                <Route path="/questions" component={Questions} />
              </div>
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
