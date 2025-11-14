import React, { useState, useMemo } from 'react';
import "./style.css"

import doceDeLeite from '../../assets/saborDL.png'
import doceDLnozes from '../../assets/saborDCNozes.png'
import brigadeiro from '../../assets/novoBrigadeiro.png'
import ninho from '../../assets/saborNinho.png'
import nutella from '../../assets/novoNutella.png'
import brigadeiroAmargo from '../../assets/novpAmargo.png'

import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  FormControl,
  Badge,
} from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';

export default function CardapioApp() {
  const initialItems = [
    {
      id: 1,
      name: 'Pão de Mel Tradicional',
      price: 6.50,
      category: 'Doce de leite',
      description: 'Recheio de doce de leite, cobertura de chocolate ao leite.',
      image: doceDeLeite,
    },
    {
      id: 2,
      name: 'Pão de mel sabor Ninho',
      price: 6.50,
      category: 'Leite ninho',
      description: 'Recheio de ninho , cobertura de chocolate ao leite.',
      image:ninho,
    },
    {
      id: 3,
      name: 'Pão de mel sabor Nutella',
      price: 6.50,
      category: 'Nutella',
      description: 'Recheio de nutella , cobertura de chocolate ao leite.',
      image: nutella,
    },
    {
      id: 4,
      name: 'Pão de Mel sabor Brigadeiro',
      price: 6.50,
      category: 'Brigadeiro',
      description: 'Recheio de brigadeiro , cobertura de chocolate ao leite.',
      image: brigadeiro,
    },
    {
      id: 5,
      name: 'Pão De Mel Sabor Doce De Leite Com Nozes',
      price: 6.50,
      category: 'Doce De Leite Com Nozes',
      description: 'Recheio de doce de leite com nozes , cobertura de chocolate ao leite.',
      image: doceDLnozes,
    },
    {
      id: 6,
      name: 'Pão De Mel Sabor Brigadeiro Meio Amargo',
      price: 6.50,
      category: 'Brigadeiro Meio Amargo',
      description: 'Recheio de brigadeiro meio amargo , cobertura de chocolate ao leite.',
      image: brigadeiroAmargo,
    },
  ];

  const [items] = useState(initialItems);
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(items.map((i) => i.category)));
    return ['Todas', ...cats];
  }, [items]);

  const filtered = items.filter((i) => {
    const matchesQuery = i.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = categoryFilter === 'Todas' || i.category === categoryFilter;
    return matchesQuery && matchesCategory;
  });

  return (
    <Container className="my-5">
      <Row className="mb-4 align-items-center">
        <Col xs={12} md={6} className="mb-2 mb-md-0">
          <h2>Cardápio de Pães de Mel</h2>
          <p className="text-muted">Veja todos os sabores disponíveis.</p>
        </Col>

        <Col xs={12} md={6} className="d-flex gap-2 justify-content-md-end">
          <InputGroup style={{ maxWidth: 360 }}>
            <InputGroup.Text>
              <FiSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Buscar por nome..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>

          <Form.Select
            style={{ width: 160 }}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      <Row xs={1} sm={2} md={3} className="g-4">
        {filtered.length === 0 && (
          <Col>
            <Card className="p-3 text-center">
              <p className="mb-0">Nenhum item encontrado.</p>
            </Card>
          </Col>
        )}

        {filtered.map((item) => (
          <Col key={item.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ objectFit: 'cover', height: 180 }}
              />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                  <Card.Title className="mb-1">{item.name}</Card.Title>
                  <Badge bg="secondary">{item.category}</Badge>
                </div>

                <Card.Text className="text-muted small">
                  {item.description}
                </Card.Text>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <strong>R$ {item.price.toFixed(2)}</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
