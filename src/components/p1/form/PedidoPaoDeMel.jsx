import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PedidoPaoDeMel() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    sabor: "",
    quantidade: "",
    observacoes: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4 rounded-4">
            <h2 className="text-center mb-4">🍯 Pedido de Pão de Mel</h2>

            {enviado && (
              <Alert variant="success" className="text-center">
                Pedido enviado com sucesso! Entraremos em contato pelo WhatsApp.
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Telefone / WhatsApp</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefone"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Sabor do pão de mel</Form.Label>
                <Form.Select
                  name="sabor"
                  value={formData.sabor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um sabor</option>
                  <option value="Doce de Leite">Doce de Leite</option>
                  <option value="Brigadeiro">Brigadeiro</option>
                  <option value="Ninho">Ninho</option>
                  <option value="Nutella">Nutella</option>
                  <option value="Brigadeiro Amargo">Brigadeiro Amargo</option>
                  <option value="Doce de Leite com Nozes">Doce de Leite com Nozes</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Quantidade</Form.Label>
                <Form.Control
                  type="number"
                  name="quantidade"
                  min="1"
                  placeholder="Ex: 12"
                  value={formData.quantidade}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Observações</Form.Label>
                <Form.Control
                  as="textarea"
                  name="observacoes"
                  rows={3}
                  placeholder="Alguma preferência, embalagem, etc."
                  value={formData.observacoes}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100 py-2 rounded-3">
                Fazer Pedido
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
