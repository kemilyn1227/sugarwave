import React from "react";
import { Card } from "react-bootstrap";

import Cliente1 from '../../assets/cliente1M.png'
import Cliente2 from '../../assets/cliente1H.png'
import Cliente3 from '../../assets/cliente2M.png'
import Cliente4 from '../../assets/cliente2H.png'
import Cliente5 from '../../assets/cliente3M.png'

const comentarios = [
  {
    nome: "Maria Souza",
    foto: Cliente1,
    texto: "Maravilhoso! O melhor pão de mel que já comi!",
  },
  {
    nome: "João Lima",
    foto: Cliente2,
    texto: "Entrega rápida e tudo muito caprichado!",
  },
  {
    nome: "Ana Pereira",
    foto: Cliente3,
    texto: "Compro sempre! O sabor de doce de leite é perfeito!",
  },
  {
    nome: "Guilherme Xavier",
    foto: Cliente4,
    texto: "Compro sempre! O sabor de doce de leite é perfeito!",
  },
  {
    nome: "Paula souza",
    foto: Cliente5,
    texto: "Dá pra ver o amor em cada detalhe. Perfeito!",
  },
];

const Comentarios = () => {
  return (
    <div className="mt-4 centralizado">
      <h4 className="mb-3">✨ Avaliações dos Clientes</h4>

      <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center">
        {comentarios.map((item, index) => (
          <Card key={index} style={{ width: "260px" }}>
            <Card.Body className="d-flex flex-column align-items-center text-center">
              <img
                src={item.foto}
                alt={item.nome}
                className="rounded-circle mb-3"
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
              />

              <h6 className="fw-bold">{item.nome}</h6>
              <p className="text-muted small mb-0">{item.texto}</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Comentarios;
