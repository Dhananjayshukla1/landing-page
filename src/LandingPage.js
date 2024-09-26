import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
  Carousel,
} from "react-bootstrap";
import "./styles.css"; // Adjust the path as necessary

const LandingPage = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const products = [
    {
      id: 1,
      title: "Product 1",
      price: "$99.99",
      img: "/product1.jpg",
      hoverImages: ["/product2.jpg", "/product3.jpg", "/product1.jpg"],
    },
    {
      id: 2,
      title: "Product 2",
      price: "$149.99",
      img: "/product2.jpg",
      hoverImages: ["/product4.jpg", "/product2.jpg", "/product3.jpg"],
    },
    {
      id: 3,
      title: "Product 3",
      price: "$79.99",
      img: "/product3.jpg",
      hoverImages: ["/product1.jpg", "/product3.jpg", "/product4.jpg"],
    },
    {
      id: 4,
      title: "Product 4",
      price: "$199.99",
      img: "/product4.jpg",
      hoverImages: ["/product4.jpg", "/product3.jpg", "/product2.jpg"],
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">ShopEase</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#categories">Categories</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section">
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100 img-fluid"
              src="banner/sale.jpg"
              alt="Electronics"
            />
            <Carousel.Caption>
              <h3>Shop Latest Electronics</h3>
              <p>Get the best deals on the latest gadgets and devices.</p>
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100 img-fluid"
              src="banner/shopping.jpg"
              alt="Clothing"
            />
            <Carousel.Caption>
              <h3>Exclusive Fashion Deals</h3>
              <p>Upgrade your wardrobe with the latest trends.</p>
              <Button variant="primary" size="lg">
                Explore Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "550px" }}
              className="d-block w-100 img-fluid"
              src="banner/shopping2.jpg"
              alt="Home Appliances"
            />
            <Carousel.Caption>
              <h3>Best Home Appliances</h3>
              <p>Make your home more efficient with our top appliances.</p>
              <Button variant="primary" size="lg">
                Buy Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Shop by Categories</h2>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <div className="category">
                  <Card.Img className="img-fluid" src="/Apple.jpg" alt="Electronics" />
                </div>
                <Card.Body>
                  <Card.Title>Electronics</Card.Title>
                  <Button variant="primary" href="#">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <div className="category">
                  <Card.Img className="img-fluid" variant="top" src="/appliances.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Clothing</Card.Title>
                  <Button variant="primary" href="#">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="mb-4">
                <div className="category">
                  <Card.Img className="img-fluid" variant="top" src="/cloths.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Home Appliances</Card.Title>
                  <Button variant="primary" href="#">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Featured Products</h2>
          <Row>
            {products.map((product) => (
              <Col xs={12} sm={6} md={3} key={product.id}>
                <Card
                  className="mb-4"
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {hoveredProduct === product.id ? (
                    <Carousel interval={2000} fade>
                      {product.hoverImages.map((hoverImg, index) => (
                        <Carousel.Item key={index}>
                          <img
                            className="d-block w-100 img-fluid"
                            src={hoverImg}
                            alt={`Hover Image ${index + 1}`}
                            style={{ height: "356px", objectFit: "cover" }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  ) : (
                    <Card.Img
                      className="d-block w-100 img-fluid"
                      variant="top"
                      src={product.img}
                      style={{ height: "356px", objectFit: "cover" }}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary" href="#">
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-light py-4">
        <Container className="text-center">
          <p>&copy; ShopEase</p>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
