
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Gennux</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#productos">Productos</Nav.Link>
        <Nav.Link href="#carrito">Carrito</Nav.Link>
        <Nav.Link href="#mi-cuenta">Mi Cuenta</Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;