import React, { useState, useEffect } from "react";
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavigationBar from "./Navbar";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ name: "John Doe" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div className="home-container">
      <NavigationBar user={user} onLogout={handleLogout} />

      <Carousel className="home-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Exquisite Dining</h3>
            <p>Experience culinary excellence in a luxurious setting.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Cozy Atmosphere</h3>
            <p>Enjoy our warm and inviting ambiance.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Culinary Artistry</h3>
            <p>Indulge in our chef's creative masterpieces.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4">Welcome to Our Restaurant</h1>
            <p className="lead">Enjoy our delicious food and cozy atmosphere!</p>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Our Menu</Card.Title>
                <Card.Text>Explore our diverse selection of dishes crafted with the finest ingredients.</Card.Text>
                <Button variant="primary">View Menu</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Reservations</Card.Title>
                <Card.Text>Book your table now for an unforgettable dining experience.</Card.Text>
                <Button variant="primary">Make a Reservation</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Special Events</Card.Title>
                <Card.Text>Host your special occasions in our elegant private dining rooms.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;