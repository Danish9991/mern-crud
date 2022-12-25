import React, {useEffect} from 'react'
import {Button, Container, Row, Col, Table} from 'react-bootstrap'
import {useNavigate, Link} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import {getUsers, reset, deleteUser, getUserById} from '../features/user/userSlice'
import {FaEdit, FaEye, FaTrash} from 'react-icons/fa'
import { toast } from 'react-toastify'

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {users, user, isLoading, isError, isSuccess, message} = useSelector((state) => state.user)
  
  useEffect(() => {
    dispatch(getUsers())
    .unwrap()
    .then(() => {
        dispatch(reset())
    })
  }, [dispatch])

  console.log(users);
  const handleClick = () => {
        navigate('/addUser')
  }

  const viewHandler = (id) => {
    console.log(id)
  }

  const editHandler = (id) => {
    dispatch(getUserById(id))
    .unwrap()
    .then(() => {
      navigate(`/edit-user/${id}`)
    })

  }

  const deleteHandler = (id) => {
    if(window.confirm('Are you sure you want to delete this user')){
        dispatch(deleteUser(id))
        .unwrap()
        .then(() => {
          if(user){
            dispatch(reset())
          }
          dispatch(getUsers());
           dispatch(reset())
        })
  
    }
    console.log(id);
  }

  return (
    <Container>
        <Row>
          <Col md={12}>
          <Button style={{textAlign : 'center', margin : 'auto', display : 'flex', marginTop : '25px'}} variant="success" onClick={handleClick}>Add User</Button>
          </Col>
       </Row>

       <Table style={{marginTop : '30px'}} striped bordered hover size="md">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users && users.length>0 && users.map((user) => (
        <tr key={user._id}>
        <td>1</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.address}</td>
        <td style={{width : '200px'}}>
          <Button style={{margin : '0px 5px'}} variant='dark' onClick={() => viewHandler(user._id)} > <FaEye /> </Button>
          <Button style={{margin : '0px 5px'}} variant='warning' onClick={() => editHandler(user._id)}> <FaEdit /> </Button>
          <Button style={{margin : '0px 5px'}} variant='danger' onClick={() => deleteHandler(user._id)}> <FaTrash /> </Button> 
        </td>
      </tr>
        ))}

      </tbody>
    </Table>
    </Container>
  )
}

export default Home