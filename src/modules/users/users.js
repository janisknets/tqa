import React from 'react'

class Users extends React.Component {

  render () {
    return <div>
    {this.props.users.map((user, index) => 
      <div key={index}>{user.name} {user.surname}</div>
    )}
    </div>
  }
}

export default Users
