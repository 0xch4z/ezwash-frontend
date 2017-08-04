import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Link from 'next/link';

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
        <NavItem eventKey={1}>
          <Link href="/">
            <div>Home</div>
          </Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link href="/services">
            <div>Services</div>
          </Link></NavItem>
        <NavItem eventKey={3}>
          <Link href="/employment">
            <div>Employment</div>
          </Link>
        </NavItem>
        <NavItem eventKey={4}>
          <Link href="/about">
            <div>About</div>
          </Link>
        </NavItem>
        <NavItem eventKey={5}>
          <Link href="/contact">
            <div>Contact</div>
          </Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
