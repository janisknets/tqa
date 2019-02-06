import React, { Component } from 'react'
import { Menu } from 'antd';
import { withRouter, Link } from 'react-router-dom'

import './navigation.css'

class Navigation extends Component {
  state = {
    current: '/'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
        current: e.key,
    });
  }

  render () {
    return <React.Fragment>
        <div className="logo" />
        <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="Menu"
        theme="dark"
      >
        <Menu.Item key="/">
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="questions" >
          <Link to='/questions'>Questions</Link>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  }
}

export default withRouter(Navigation)