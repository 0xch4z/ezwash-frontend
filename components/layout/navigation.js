import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import NavLink from './nav-link';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
        <Navbar.Brand>
          <img src="/static/img/logo.svg" alt="ezwash-logo" />
        </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavLink href="/" name="Home" index={1} />
        <NavLink href="/services" name="Services" index={2} />
        <NavLink href="/employment" name="Employment" index={3} />
        <NavLink href="/about" name="About" index={4} />
        <NavLink href="/contact" name="Contact" index={5} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
