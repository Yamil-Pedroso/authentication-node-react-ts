import { Container, Row, Col } from 'react-bootstrap'
import images from '../../assets'

interface FormContainerProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
      <Container className="" style={{ paddingLeft: "0" }}>
        <Row className="justify-content-md-center mt-5">
          <Col
           xs={12} md={6} className="card p-5">
           <img src={images.bg} alt="logo" className="logo" />
            {children}
          </Col>
        </Row>
      </Container>
   
  )
}

export default FormContainer
