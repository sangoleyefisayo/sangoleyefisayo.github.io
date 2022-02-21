import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from "react-router-bootstrap";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  
}
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

const Navibar = () => (
  <Styles>
    <Navbar collapseOnSelect bg="dark" variant="light" expand="lg">
      <Navbar.Brand href="/">Nafis Irtija</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light"><FontAwesomeIcon icon={faBars} style={{ color: '#bbb' }} /></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>

            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link>
              <Link to="/scope">Scope</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/topics">Topics</Link>
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <LinkContainer to="/submissions">
              <Nav.Link>Publications</Nav.Link>
            </LinkContainer>
          </Nav.Item>

          {/* <Nav.Item>
            <Nav.Link>
              <Link to="/dates">Important Dates</Link>
            </Nav.Link>
          </Nav.Item> */}

          <Nav.Item>
            <LinkContainer to="/committees">
              <Nav.Link>Experience</Nav.Link>
            </LinkContainer>
          </Nav.Item>

          <Nav.Item>
            <LinkContainer to="/program">
              <Nav.Link>Interests</Nav.Link>
            </LinkContainer>
          </Nav.Item>

          {/* <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
);

export default Navibar;