// src/App.jsx
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from './hooks/useAuth';
import { MotionDiv } from './components/content/MotionDiv';

function App() {
  const { loading } = useAuth();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      {!loading && (
        <MotionDiv>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </MotionDiv>
      )}
    </>
  );
}

export default App;
