import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          bg="dark"
          fixed="top"
        >
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
