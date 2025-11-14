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
                  Olá! Meu nome é Gabriela Cristina, sou vendedora autônoma e 
                  apaixonada pelo mundo dos doces. Comecei recentemente meu negócio 
                  com o objetivo de adoçar momentos especiais e levar mais sabor e carinho para o 
                  dia a dia das pessoas. Cada doce é feito com atenção aos detalhes, ingredientes de 
                  qualidade e muito amor. 
                </p>
                <p>
                  Valorizo a satisfação de cada cliente. Seja para presentear
                  alguém ou se 
                  presentear, aqui você encontra o doce ideal para cada ocasião! 
                </p>
                <div className="mt-3">
                  <Button variant="primary" className="me-2" href="https://wa.me/5516997540762?text=Olá,+gostaria+de+saber+mais+sobre+o+sugarWaves!">
                    Contato
                  </Button>
                  <Button variant="outline-secondary">
                    instagram 
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
