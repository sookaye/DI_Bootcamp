import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbar2({ loggedIn }) {
    return (
        <Navbar expand="lg" className={`bg-body-tertiary ${loggedIn ? '' : 'd-none'}`}  sticky="top">
          <Container fluid>
            <Navbar.Brand href="/">REACT </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/register">Registration</Nav.Link>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-between">
                  <Navbar.Brand className="d-none d-lg-block" />
                  <Button variant="success" href="/logout">Logout</Button>
             </Navbar.Collapse>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navbar2;