import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function MainNavbar() {
  return (
    <Navbar expand="lg" collapseOnSelect className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <LinkContainer to='/cart'>
            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
          </ LinkContainer>
          <LinkContainer to='/login'>
            <Nav.Link><i className="fas fa/home/eryk/Downloads/products.js-user"></i>Login</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;