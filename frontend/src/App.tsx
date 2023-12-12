import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
