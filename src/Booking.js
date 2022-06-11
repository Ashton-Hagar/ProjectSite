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
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

function Booking() {
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
              className="nav"
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
              disabled
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
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12} className="customRow3">
            <span className="CenterText">Booking</span>
          </Col>
        </Row>
      </Container>
      <Container className="sizeC">
        <Row>
          <Col>
            <Card className="text-center sizeF">
              <Card.Title>Input Information Here!</Card.Title>
              <Card.Body>
                <Container>
                  <Row>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>First and last name</InputGroup.Text>
                      <Form.Control aria-label="First name" />
                      <Form.Control aria-label="Last name" />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Email Address
                      </InputGroup.Text>
                      <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    {" "}
                    <Form.Select>
                      <option>Select a Date and Time</option>
                      <option>06/10/2022 10:00AM</option>
                      <option>06/10/2022 12:00PM</option>
                      <option>06/10/2022 3:00PM</option>
                    </Form.Select>
                  </Row>
                  <Row>
                    {" "}
                    <Form.Select>
                      <option>Select a Service</option>
                      <option>Cutting Service</option>
                      <option>Colouring Service</option>
                      <option>Highlighting Service</option>
                    </Form.Select>
                  </Row>
                  <Row>
                    {" "}
                    <Form.Select>
                      <option>Select a Employee</option>
                      <option>John</option>
                      <option>Aleen</option>
                    </Form.Select>
                  </Row>
                  <Row>
                    <Button
                      onClick={() =>
                        alert("Thank you for booking with WinTrim")
                      }
                    >
                      Confirm Booking
                    </Button>
                  </Row>
                  <Row>
                    <Card>
                      <Card.Body>
                        <Card.Title>Open Hours</Card.Title>
                        <Card.Text className="size">
                          Tuesday: 10-7pm<br></br>
                          Wednesday: 10-8pm<br></br>
                          Thursday: 10-8pm<br></br>
                          Friday: 10-8pm<br></br>
                          Saturday: 9-5pm<br></br>
                          Sunday: Closed <br></br>
                          Monday: Closed<br></br>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
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

export default Booking;
