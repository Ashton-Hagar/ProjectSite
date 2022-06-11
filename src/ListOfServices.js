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

function ListOfServices() {
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
              disabled
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
          <Col sm={12} className="customRow2">
            <span className="CenterText fontstyle">Our Services</span>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="xlFont fontstyle">
                  Cutting Service
                </Card.Title>
                <Card.Text className="ServiceCards">
                  <p>
                    Woman's cut: $50-$100<br></br>
                    Men's cut: $50+<br></br>
                    Girl's cut: $40+<br></br>
                    Boy's cut: $40+<br></br>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Body>
                <Card.Title className="xlFont fontstyle">
                  Colouring Service
                </Card.Title>
                <Card.Text className="ServiceCards">
                  <p>
                    Root colour $75+<br></br>
                    All-over colour $90+<br></br>
                    Men’s colour $50+<br></br>
                    Color correction $100 per hour<br></br>
                    Toner $40+<br></br>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Body>
                <Card.Title className="xlFont fontstyle">
                  Highlighting Services
                </Card.Title>
                <Card.Text className="ServiceCards ">
                  <p>
                    Mini highlights $70+<br></br>
                    Partial highlights $90+<br></br>
                    Fullhead of highlights $130+<br></br>
                    Colour and mini highlights $91+<br></br>
                    Colour and partial highlights $131+<br></br>
                    Colour and full highlights $160+<br></br>
                    Colour and Ombre $210+
                  </p>
                </Card.Text>
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

export default ListOfServices;
