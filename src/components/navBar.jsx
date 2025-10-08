import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import Logo from './p1/cloud';

function nav() {
  return (

    <div className='divNav'>

        <Navbar  expand="lg"
    className="mx-auto my-3 rounded shadow rounded-pill mt-0 mb-0"
    style={{ maxWidth: "900px", backgroundColor: "#f8f9fa" }}>

      <Container>

        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">

            <Logo/>

            <Nav.Link href="#home" className='mx-5'>Home</Nav.Link>
            <Nav.Link href="#link" className='mx-5'>Cardápio</Nav.Link>
            <Nav.Link href="#link" className='mx-5'>Quem somos</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  
  );
}

export default nav;