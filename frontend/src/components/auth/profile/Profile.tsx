import { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../form-container/FormContainer'
import { toast } from 'react-toastify'
import Loader from '../../../components/loader/Loader'
import { useUpdateUserMutation } from '../../../slices/usersApiSlice'
import { setCredentials } from '../../../slices/authSlice'
import { Button, Input, Container, BoxWrapper, Box } from './styles';

const Profile = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const { userInfo } = useSelector((state: any) => state.auth)

  const [updateProfile, { isLoading }] = useUpdateUserMutation()

  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [userInfo.email, userInfo.name])

  const submitHandler = async (e: any) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap()
        console.log(res)
        dispatch(setCredentials(res))
        toast.success('Profile updated successfully')
      } catch (err: any) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }
  return (
    <Container>
      <FormContainer>
        <h1>Update Profile</h1>
  
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="name">
            <Form.Label>Name</Form.Label>
            <Input
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </Form.Group>
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </Form.Group>
          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Form.Group>
  
          <Form.Group className="my-2" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
          </Form.Group>
  
          <Button type="submit" className="mt-3">
            Update
          </Button>
  
          {isLoading && <Loader />}
        </Form>
      </FormContainer>
     
    </Container>
  )
}

export default Profile
