import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Logo from "./p1/cloud";

export default function NavBar() {
  return (
    <div className="divNav">
      <Navbar
        expand="lg"
        className="mx-auto my-3 rounded shadow rounded-pill mt-0 mb-0"
        style={{ maxWidth: "900px", backgroundColor: "#f8f9fa" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/"> <Logo /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" className="mx-5">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/cardapio" className="mx-5">Cardápio</Nav.Link>
            <Nav.Link as={NavLink} to="/quem-somos" className="mx-5">Quem somos</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

