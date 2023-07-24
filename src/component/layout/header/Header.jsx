import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/image/logo.JPG";
import "./Header.css";

import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  return (
    <div className="top-menu bg-mycolor">
      <div className="menubar" style={{ height: "60px" }}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                // style={{ width: "65px" }}
                className="rounded-lg logo-image"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Deals</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    cateogries
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="search-menu">
        <Container className="d-flex justify-content-center py-2 mt-4">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              style={{
                width: "35vw",
                height: "2.5rem",
                borderRadius: "1.5rem",
              }}
            />
            <button
              className="rounded-full bg-black text-white px-4 py-2"
              style={{ height: "2.5rem" }}
            >
              Search
            </button>
          </Form>
        </Container>
      </div>
    </div>
  );
};
