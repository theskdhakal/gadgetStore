import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  return (
    <div className="top-menu bg-lime">
      <div className="search-menu " style={{ height: "4rem" }}>
        <Container className="d-flex justify-content-between py-3">
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "30vw" }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </div>
      <div className="menubar">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};
