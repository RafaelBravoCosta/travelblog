import React from "react";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-title">
        <h1>Travel Blog</h1>
      </div>
      <Container>
        <Row>
          <div className="footer-items">
            <Col className="footer-copy">
              <p>Copyright © {year}</p>
            </Col>
            <div className="titles">
              <Col>
                <Link href="#" to="/About">
                  <h2 className="title-about">About us</h2>
                </Link>
              </Col>
            </div>
            <div className="titles">
              <Col>
                <Link href="#" to="/ContactUs">
                  <h2>Contact us</h2>
                </Link>
              </Col>
              <div className="footer-icons-main">
                <Col>
                  <Link href="#" className="icons-title">
                    <UilInstagram className="footer-icon" />
                    Instagram
                  </Link>
                </Col>
                <Col>
                  <Link href="#" className="icons-title">
                    <UilFacebookF className="footer-icon" />
                    Facebook
                  </Link>
                </Col>
                <Col>
                  <Link href="#" className="icons-title">
                    <UilTwitterAlt className="footer-icon" />
                    Twitter
                  </Link>
                </Col>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
