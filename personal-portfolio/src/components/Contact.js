import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (formCategory, value) => {
    setFormDetails({
      ...formDetails,
      [formCategory]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Contact-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code ===200) {
        setStatus({success: true, message: "Message send successfully"});
    } else {
        setStatus({success: false, message: "Something went wrong, please try again later."})
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <h2>Get In Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col sm={6} className="px-1">
                  <Form.Control
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <Form.Control
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={6} className="px-1">
                  <Form.Control
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <Form.Control
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} className="px-1">
                  <Form.Control
                    type="message"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <Button type="submit"><span>{buttonText}</span></Button>
                </Col>
                {
                    status.message &&
                    <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p >
                    </Col>
                }
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
