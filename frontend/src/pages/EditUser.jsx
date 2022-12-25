import {Button, Form, Container} from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {createUser, getUserById, reset, updateUser} from '../features/user/userSlice'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { users, user, isLoading, isError, isSuccess, message} = useSelector((state) => state.user)

    // useEffect(() => {
    //     dispatch(getUserById(params.id))
    // }, [dispatch])



    console.log(user,'user');
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [address, setAddress] = useState(user.address)
    
    const submitUser = (e) => {
        e.preventDefault();
        const updatedUser = {
            name,
            email,
            phoneNumber,
            address
        }
        console.log(updatedUser);
        dispatch(updateUser({updatedUser, id : params.id}))
        .unwrap()
        .then(() => {
            navigate('/')
        })
    }
   
  return (
    <Container>
    <Form style={{width : '70%', marginTop : '30px'}} onSubmit={submitUser}>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="phoneNumber">
      <Form.Label>phoneNumber</Form.Label>
      <Form.Control type="number" placeholder="Enter phoneNumber" name='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="address">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="address" name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  )
}

export default EditUser