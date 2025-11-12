import React from "react";
import "./styles.css"
import Gabriela from "../../assets/gabriela.jpeg"
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

export default function Apresentacao() {
  return (
    <Container className="my-5 apresentacao">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm p-4">
            <Row className="g-3">
              <Col md={4} className="d-flex justify-content-center">
                <Image
                  src={Gabriela}
                  roundedCircle
                  fluid
                  alt="Foto do Vendedor"
                />
              </Col>
              <Col md={8}>
                <h2>Gabriela Cristina</h2>
                <p>
                  Olá, meu nome é Fulano da Silva. Sou vendedor especializado
                  em produtos de X, com anos de experiência em oferecer qualidade
                  e confiança aos meus clientes.  
                </p>
                <p>
                  Faço questão de atenção nos detalhes e na satisfação de cada
                  cliente. Estou à disposição para qualquer dúvida ou suporte.
                </p>
                <div className="mt-3">
                  <Button variant="primary" className="me-2">
                    Contato
                  </Button>
                  <Button variant="outline-secondary">
                    Ver mais
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
