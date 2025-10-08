import React from "react";
import "./infinity.css"

import PMel from '../../../assets/Ptradicional.png';
import PKpop from '../../../assets/PKpop.png';
import PNut from '../../../assets/PNutella.png';
import PDl from '../../../assets/PDoceLeite.png';

export default function InfiniteCarousel() {
  const items = [ PNut, PMel,PDl,PKpop
  ];

  // Duplicamos os itens para o loop parecer infinito
  const doubledItems = [...items, ...items];

  return (
    <div className="infinity-carousel-container">
      <div className="infinity-carousel-track">
        {doubledItems.map((src, index) => (
          <div className="infinity-carousel-item" key={index}>
            <img src={src} alt={`item-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
