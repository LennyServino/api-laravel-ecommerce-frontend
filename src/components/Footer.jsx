import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              eros et felis lacinia tincidunt.
            </p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#features" className="text-white">
                  Características
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white">
                  Precios
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacta con Nosotros</h5>
            <p>Correo: contacto@tusitio.com</p>
            <p>Teléfono: +1 234 567 890</p>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>
              &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos
              reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
