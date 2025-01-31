import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { lazy } from 'react';
// import SignUpPage from '../pages/SignUpPage';
// import SignInPage from '../pages/SignInPage';
// import NotFoundPage from '../pages/NotFoundPage';
// import HomePage from '../pages/HomePage';
// import Products from '../components/Products';

const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const Products = lazy(() => import('../components/Products'));

export const ecommerceRoute = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
