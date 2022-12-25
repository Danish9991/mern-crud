import {Button, Form, Container} from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {createUser, reset} from '../features/user/userSlice'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const AddUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.user)

    const submitUser = (e) => {
        e.preventDefault();
        if(name && email && phoneNumber && address){
            dispatch(createUser({
                name,
                email,
                phoneNumber,
                address
            }))
            .unwrap()
            .then(() => {
              toast.success('user created successfylly');
                dispatch(reset()) 
                navigate('/')
            })
        }
    }
    
    // if(user){
    //     navigate('/')
    // }
    // useEffect(() => {
    //        dispatch(reset())
           
    // }, [dispatch, user])
    
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

export default AddUser