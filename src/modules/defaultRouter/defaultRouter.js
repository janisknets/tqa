import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from 'react-router-protected-route'
import Login from 'modules/login'
import Register from 'modules/register'
import Protected from './protectedRouter'

class DefaultRouter extends React.Component {
  render () {
    return <div className="Content-box">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <ProtectedRoute
          isAccessible={this.props.isLoggedIn}
          redirectToPath="/login"
          path="/*"
          component={(props) => <Protected {...props} />}
        />
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
