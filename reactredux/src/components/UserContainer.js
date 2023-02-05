//(7)Async Actions
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ usersData, fetchUsers }) {

  useEffect(() => { 
    fetchUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return usersData.loading ?
    (<h2>Loading ...</h2>)
    : usersData.error ? (
      <h1>{usersData.error}</h1>
    ) : (
      <div>
        {
          usersData &&
          usersData.users &&
          usersData.users.map(user => <p>{user.name}</p>)
        }
      </div>
    )
}

const mapStateToProps = state => {
  return {
    usersData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)