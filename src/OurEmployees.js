import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

function OurEmployees() {
  let navigate = useNavigate();
  return (
    <div className="wrapper">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
              className="nav"
            >
              Title
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Button
              onClick={() => {
                navigate("/ListOfServices");
              }}
              variant="primary"
              size="lg"
            >
              List of Services
            </Button>
            <Button
              onClick={() => {
                navigate("/OurEmployees");
              }}
              variant="primary"
              size="lg"
            >
              Our Employees
            </Button>
            <Button
              onClick={() => {
                navigate("/Booking");
              }}
              variant="primary"
              size="lg"
            >
              Booking
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <div className="CenterText">Our Employees</div>
    </div>
  );
}

export default OurEmployees;
