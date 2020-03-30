import React from "react";

import logo from '../assets/img/covid3.jpeg';
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = () => {
  const scrollTo = id => e => {
    e.preventDefault();
    scroll.scrollTo({
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: id
    });
  };

  return (
    <header>
      <Navbar bg="none" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={scrollTo("home")}
            aria-label="Logo"
          ><img
          alt=""
          src={logo}
          style={{
            height: 70 + 'px',
            width: 70 + 'px',
            marginRight: 10 + "px",
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            borderRadius: 50+"%",
            overflow: 'hidden',
            objectFit: 'cover'
  
          }}
          className="d-inline-block align-top"
          />  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span />
            <span />
            <span />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Home
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                About
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Download
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
