import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';

const App = () => {
  return (
    <div style={{ backgroundColor: "#1e1e1f", height: "100vh" }}>
      <Header />
      <ToastContainer />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
