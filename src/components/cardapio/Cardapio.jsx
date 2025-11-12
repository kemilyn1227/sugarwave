import React, { useState, useMemo } from 'react';
import "./style.css"

import doceDeLeite from '../../assets/saborDL.png'
import doceDLnozes from '../../assets/saborDCNozes.png'
import brigadeiro from '../../assets/saborBrigadeiro.png'
import ninho from '../../assets/saborNinho.png'
import nutella from '../../assets/saborNutella.png'
import brigadeiroAmargo from '../../assets/saborBrigadeiroAmargo.png'

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Badge,
} from 'react-bootstrap';
import { FiPlus, FiSearch, FiEdit, FiTrash2 } from 'react-icons/fi';

export default function CardapioApp() {
  const initialItems = [
    {
      id: 1,
      name: 'Pão de Mel Tradicional',
      price: 4.5,
      category: 'Doce de leite',
      description: 'Recheio de doce de leite, cobertura de chocolate ao leite.',
      image: doceDeLeite,
    },
    {
      id: 2,
      name: 'Pão de Mel Gourmet',
      price: 6.5,
      category: 'Leite ninho',
      description: 'Recheio de brigadeiro belga, toque de sal marinho.',
      image:ninho,
    },
    {
      id: 3,
      name: 'Pão de Mel Sem Lactose',
      price: 5.5,
      category: 'Nutella',
      description: 'Opção sem lactose com chocolate vegano.',
      image: nutella,
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(items.map((i) => i.category)));
    return ['Todas', ...cats];
  }, [items]);

  function handleOpenNew() {
    setEditingItem(null);
    setShowModal(true);
  }

  function handleEdit(item) {
    setEditingItem(item);
    setShowModal(true);
  }

  function handleDelete(id) {
    if (window.confirm('Deseja realmente excluir este item?')) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    }
  }

  function handleSave(formValues) {
    if (editingItem) {
      // editar
      setItems((prev) => prev.map((i) => (i.id === editingItem.id ? { ...editingItem, ...formValues } : i)));
    } else {
      // novo
      const newItem = { id: Date.now(), ...formValues };
      setItems((prev) => [newItem, ...prev]);
    }
    setShowModal(false);
  }

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
          <p className="text-muted">Gerencie seus sabores, preços e descrições.</p>
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

          <Form.Select style={{ width: 160 }} value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Form.Select>

          <Button variant="success" onClick={handleOpenNew}>
            <FiPlus />
          </Button>
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
              <Card.Img variant="top" src={item.image} style={{ objectFit: 'cover', height: 180 }} />
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start">
                  <Card.Title className="mb-1">{item.name}</Card.Title>
                  <Badge bg="secondary">{item.category}</Badge>
                </div>
                <Card.Text className="text-muted small">{item.description}</Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <strong>R$ {item.price.toFixed(2)}</strong>
                  <div>
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEdit(item)}>
                      <FiEdit />
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(item.id)}>
                      <FiTrash2 />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <EditModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSave}
        editing={editingItem}
      />
    </Container>
  );
}

function EditModal({ show, onHide, onSave, editing }) {
  const [name, setName] = useState(editing ? editing.name : '');
  const [price, setPrice] = useState(editing ? editing.price : '');
  const [category, setCategory] = useState(editing ? editing.category : 'Tradicional');
  const [description, setDescription] = useState(editing ? editing.description : '');
  const [image, setImage] = useState(editing ? editing.image : 'https://via.placeholder.com/300x200?text=P%C3%A3o+de+Mel');

  // Sync when editing changes
  React.useEffect(() => {
    if (editing) {
      setName(editing.name || '');
      setPrice(editing.price || '');
      setCategory(editing.category || 'Tradicional');
      setDescription(editing.description || '');
      setImage(editing.image || 'https://via.placeholder.com/300x200?text=P%C3%A3o+de+Mel');
    } else {
      setName('');
      setPrice('');
      setCategory('Tradicional');
      setDescription('');
      setImage('https://via.placeholder.com/300x200?text=P%C3%A3o+de+Mel');
    }
  }, [editing, show]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !price) {
      alert('Preencha pelo menos nome e preço.');
      return;
    }
    const payload = { name, price: parseFloat(price), category, description, image };
    onSave(payload);
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Editar Item' : 'Novo Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Preço (R$)</Form.Label>
            <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <Form.Control value={category} onChange={(e) => setCategory(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL da Imagem</Form.Label>
            <Form.Control value={image} onChange={(e) => setImage(e.target.value)} />
            <Form.Text className="text-muted">Se vazio, será usado um placeholder.</Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
