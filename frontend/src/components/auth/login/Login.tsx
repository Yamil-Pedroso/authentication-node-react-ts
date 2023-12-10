import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import FormContainer from '../../form-container/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../../slices/usersApiSlice'
import { setCredentials } from '../../../slices/authSlice'
import { toast } from 'react-toastify'
import Loader from '../../../components/loader/Loader'
import { Button, Input } from './styles';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const { userInfo } = useSelector((state: any) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/')
    } catch (err: any) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <FormContainer style={{backgroundColor: "#000"}}>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
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

        <Button
          disabled={isLoading}
          type="submit"
          className="mt-3"
        >
          Sign In
        </Button>
      </Form>

      {isLoading && <Loader />}

      <Row className="py-3">
        <Col>
          New Customer? <Link to="/register"
          style={{ textDecoration: "none" }}
          >
            <span style={{color: "#000", fontWeight: "bold" }}>Register</span>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Login
