import PropTypes from 'prop-types';
import NavBar from '../components/Nav-Bar';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
