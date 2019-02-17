import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from 'react-router-protected-route'
import Login from 'modules/login'
import Register from 'modules/register'
import Home from 'modules/home'
import Quizes from 'modules/quizesList'

class DefaultRouter extends React.Component {
  render () {
    return <div className="Content-box">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <ProtectedRoute
          isAccessible={this.props.isLoggedIn}
          redirectToPath="/login"
          path="/home"
          component={Home}
        />
        <ProtectedRoute
          isAccessible={this.props.isLoggedIn}
          redirectToPath="/login"
          path="/quizes"
          component={Quizes}
        />
        <Route path="/*" component={this.props.isLoggedIn ? Home : Login} />
      </Switch>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(DefaultRouter)
