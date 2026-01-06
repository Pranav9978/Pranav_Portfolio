import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { db } from "./Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import emailjs from "emailjs-com";
import "./Contact.css";


function MyContact() {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        createdAt: Timestamp.now(),
      });

      
      await emailjs.sendForm(
        "service_fqhu58a",   
        "template_3x5lnun", 
        e.target,            
        "hx1b54NksN2pIQzzr"      
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Try again!");
    }
  };

  
  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="contact-card shadow-lg p-4 " style={{backgroundColor:"transparent",border:"1px solid black"}}>
              <h2 className="text-center mb-4 contact-title" style={{color:"white"}}>
                Contact <span className="blue">Me!</span>
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMobile">
                  <Form.Control
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button className="btn-custom" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MyContact;
