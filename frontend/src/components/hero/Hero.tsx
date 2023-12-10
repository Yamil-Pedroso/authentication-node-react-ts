import { Container, Card } from 'react-bootstrap';
import { Button } from './styles';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Free Authentication😊</h1>
          <p className='text-center mb-4'>
            Full Stack Application with React, Redux, TypeScript, Node, Express, MongoDB.
          </p>
          <div className='d-flex'>
            <Link to='/login' className='me-3' style={{ textDecoration: 'none', border: "none" }}>
              <Button>
                Sign In
              </Button>
            </Link>
            <Link to='/register' className='ms-3' style={{ textDecoration: 'none', border: "none" }}>
              <Button>
                Register
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
