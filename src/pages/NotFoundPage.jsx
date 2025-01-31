import { Link } from 'react-router-dom';
import { MotionDiv } from '../components/content/MotionDiv';

const NotFoundPage = () => {
  return (
    <MotionDiv className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-muted">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al Inicio
      </Link>
    </MotionDiv>
  );
};

export default NotFoundPage;
