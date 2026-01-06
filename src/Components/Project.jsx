import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Project.css";
import Dashboard from "../assets/Dashbord1.png";
import WeatherApp from "../assets/WeatherApp.png";

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <Container>
        <h2 className="text-center mb-5">
          My <span className="blue">Projects</span>
        </h2>

        {/* Project 1 */}
        <Row className="g-4">
          <Col>
            <Card className="project-card shadow-lg">
              <Row className="g-0">
                {/* Left side - Image */}
                <Col md={5}>
                  <Card.Img
                    src={Dashboard}
                    alt="Project 1"
                    className="project-img"
                  />
                </Col>

                {/* Right side - Info */}
                <Col md={7}>
                  <Card.Body>
                    <Card.Title className="pname">
                      <h4><b>StockMaster</b></h4> - Product Inventory Management System
                    </Card.Title>
                    <Card.Text className="pinfo">
                      StockMaster is a comprehensive Product Inventory
                      Management System designed to simplify how businesses
                      track and manage their stock. With StockMaster, you can
                      efficiently add, update, and delete products, monitor
                      total stock, pending orders, and stock availability, and
                      maintain a clear overview of your inventory. Perfect for
                      small businesses, retail shops, or warehouses, StockMaster
                      ensures your inventory is always organized, accurate, and
                      up-to-date, saving time and preventing stock errors.
                    </Card.Text>
                    <Button
                      style={{ backgroundColor: "#00e0ff" }}
                      className="btn-custom"
                      href="#"
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <br />

        {
          <Row>
            <Col>
              <Card className="project-card shadow-lg">
                <Row className="g-0">
                  <Col md={5}>
                    <Card.Img
                      src={WeatherApp}
                      alt="Project 2"
                      className="project-img"
                    />
                  </Col>

                  <Col md={7}>
                    <Card.Body>
                      <Card.Title className="pname">
                        <h4><b>Weather App</b></h4>
                      </Card.Title>
                      <Card.Text className="pinfo">
                        Built a fully responsive<b> Weather Application</b> using React
                        (Vite) that provides real-time weather information based
                        on the user’s current location or searched city. The app
                        integrates the OpenWeather API to display temperature,
                        weather conditions, humidity, and wind speed. Key
                        features include automatic geolocation detection, city
                        search with validation, dark/light mode toggle with
                        local storage persistence, and an attractive
                        glassmorphism-based UI. The project follows modern React
                        best practices, includes proper error handling, and is
                        optimized for mobile and desktop devices.
                      </Card.Text>
                      <Button
                        style={{ backgroundColor: "#00e0ff" }}
                        className="btn-custom"
                        href="https://weather-app-wheat-ten-23.vercel.app/"
                        target="_blank"
                      >
                        View Project
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        }
      </Container>
    </div>
  );
}

export default Projects;
