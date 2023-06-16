import React from "react";
import "./header.css";

import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";
import ICO from "../../assets/brand.png";

const Header = () => {
  return (
    <Navbar className="nav-bar" variant="dark" bg="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavbarBrand href="#home">
          <img src={ICO} alt="logo formula logistik" className="logo-img" />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey="/home" className="justify-content-end">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#documentation">Documentation</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#pros">Pros</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
