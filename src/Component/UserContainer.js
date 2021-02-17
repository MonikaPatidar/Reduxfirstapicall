import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchUser } from './redux/Users/UserAction'
import { Table,Header } from 'semantic-ui-react'

function UsersContainer ({ userData, FetchUser }) {

  useEffect(() => {
    FetchUser()
  },[])

  return userData.loading ? (<h2>Loading</h2>) 
        : userData.error ? (<h2>{userData.error}</h2>) 
        : 
        (
        <div  className="headings">
          {/* <h2 className="headings">Users List</h2> */}
          <Header size='large'>Users List</Header>
          <div className="tablediv">
          <Table  fixed>
            <Table.Header>
              <Table.Row>
              <Table.HeaderCell>index</Table.HeaderCell>
                <Table.HeaderCell>UserId</Table.HeaderCell>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                {/* <Table.HeaderCell>Status</Table.HeaderCell> */}
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {
              userData.users.map((user, index )=> 
                // <p>{user.id}</p>
              
                <Table.Row>
                  <Table.Cell>{index}</Table.Cell>
                  <Table.Cell>{user.userId}</Table.Cell>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.title}</Table.Cell>
                  {/* <Table.Cell>{user.completed}</Table.Cell> */}
                </Table.Row>
              
              )
            }
            </Table.Body>
            </Table>
          </div>
        </div>
      )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    FetchUser: () => dispatch(FetchUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)