
import React from "react";
import "../../styles/newsletter.css"
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
        
      <h2 className='title'>Newsletter</h2>
      
      <Container className="newsletter" data-aos="fade-down" data-aos-duration="1500">

        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Assine nossa newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Se inscreva</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;