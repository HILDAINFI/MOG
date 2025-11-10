import React from "react";
import { Navbar, Nav, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";

const NavbarSection = () => (
  <Navbar expand="lg" className="bg-transparent navbar-dark fixed-top shadow-sm py-3">
    <Container>
      <Navbar.Brand href="/Home" className="fw-bold text-white fs-4">
        MOR
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav">
        <Nav className="ms-auto d-flex align-items-center gap-4">
          {/* Home */}
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="home-tooltip">Home</Tooltip>}
          >
            <Nav.Link href="#home" className="text-white fs-5">
              <FaHome />
            </Nav.Link>
          </OverlayTrigger>

          {/* About */}
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="about-tooltip">About Us</Tooltip>}
          >
            <Nav.Link href="#about" className="text-white fs-5">
              <FaInfoCircle />
            </Nav.Link>
          </OverlayTrigger>

          {/* Services */}
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="services-tooltip">Services</Tooltip>}
          >
            <Nav.Link href="#services" className="text-white fs-5">
              <FaServicestack />
            </Nav.Link>
          </OverlayTrigger>

          {/* Contact */}
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="contact-tooltip">Contact</Tooltip>}
          >
            <Nav.Link href="#contact" className="text-white fs-5">
              <FaEnvelope />
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarSection;
