import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const CenteredNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          E-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/reviews">
              Reviews
            </Link>
          </div>
          <div className="navbar-nav d-flex align-items-center gap-2">
            {user ? (
              <>
                <span className="nav-link">Hola, {user.name}</span>
                <button className="btn btn-danger btn-sm" onClick={logout}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-secondary" to="/sign-in">
                  Sign In
                </Link>
                <Link className="btn btn-primary text-white" to="/sign-up">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CenteredNavbar;
