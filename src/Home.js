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
import Card from "react-bootstrap/Card";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="wrapper">
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate("/ProjectSite");
              }}
              className="nav fontstyle"
            >
              WinTrim Hair Salon
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

      <Container fluid>
        <Row>
          <Col sm={12} className="customRow">
            <span className="CenterText fontstyle">
              Welcome To WinTrim Hair Salon!
            </span>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "50vw" }}>
              <Card.Body className="Cbody">
                <Card.Title className="fontstyle">Our Story</Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vel mattis leo, a finibus metus. Aliquam at suscipit
                    enim. Ut rutrum hendrerit tristique. Vivamus finibus eget
                    ipsum in feugiat. Integer eleifend urna vitae sodales
                    bibendum. Nam vitae tincidunt sem. Phasellus pulvinar enim
                    lectus, ac dictum orci volutpat sed. Nunc sodales velit in
                    est consectetur fringilla. Proin sed diam et dolor maximus
                    efficitur vitae ut arcu. Sed sit amet malesuada turpis.
                    Proin imperdiet arcu sapien, elementum aliquam purus
                    efficitur quis. Donec faucibus, massa a rutrum laoreet,
                    sapien odio volutpat est, ut<br></br>
                    <br></br>
                    lobortis nibh ex at dui. Fusce egestas fermentum nibh, sed
                    mollis augue euismod eu. Ut pretium molestie lorem. Vivamus
                    odio quam, gravida vitae felis nec, condimentum rutrum
                    mauris. Nam suscipit tellus a leo venenatis porta. Nunc
                    nulla justo, elementum ac urna quis, placerat scelerisque
                    purus. Aliquam urna eros, sagittis vitae feugiat sed,
                    <br></br>
                    <br></br>
                    tincidunt quis tellus. Quisque a massa massa. Maecenas sit
                    amet mauris auctor purus elementum porttitor vel eu quam.
                    Curabitur et quam eros. Praesent cursus vehicula tellus,
                    volutpat vehicula dui tempor nec. Mauris scelerisque ipsum
                    enim, sed volutpat quam fringilla eu. Nam congue mi sed
                    facilisis hendrerit. Aenean feugiat lectus vitae ante
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="customCol"></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12}></Col>
          <Card className="footer">
            <Card.Body className="footerText">
              <Card.Title>Information</Card.Title>
              <Card.Text>
                <p>
                  Email: Fakeemail@gmail.com<br></br>
                  Phone: 613-222-2323<br></br>
                  Address: 1305 Chestnut Street
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
