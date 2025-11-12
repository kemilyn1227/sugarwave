import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="text-light text-center position-relative mt-5 footerColor">
      {/* 🌊 Onda pequena no topo */}
      <div className="wave-top">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="position-absolute top-0 start-0 w-100"
          style={{ transform: "translateY(-100%)", height: "50px" }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ad47a1" />     {/* Amarelo mel */}
              <stop offset="100%" stopColor="#5b3d7f" />   {/* Laranja suave */}
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,32L60,48C120,64,240,96,360,90C480,85,600,43,720,48C840,53,960,107,1080,101C1200,95,1320,37,1380,10L1440,0V100H0Z"
          ></path>
        </svg>
      </div>

      <Container className="py-3">
        <Row>
          <Col>
            <h5 className="fw-bold">🍯 SugarWave Pães de Mel</h5>
           

            <div className="d-flex justify-content-center mb-3">
            <p className="mb-2">
              Feitos com amor, sabor e um toque de doçura artesanal 💛
            </p>
              <a href="#" className="text-light mx-2">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="bi bi-whatsapp fs-4"></i>
              </a>
              <p className="small mb-0">
              © 2025 SugarWave — Todos os direitos reservados.
            </p>
            </div>

           
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
