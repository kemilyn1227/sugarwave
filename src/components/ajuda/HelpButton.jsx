
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";

export default function HelpButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip id="help-tooltip">Precisa de ajuda?</Tooltip>}
      >
        <Button
          variant="primary"
          onClick={handleShow}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}
        >
          <FaQuestionCircle size={28} />
        </Button>
      </OverlayTrigger>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ajuda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='fw-bold'>Como podemos ajudar?</p>
          <p>O site Funciona como um catálago online ,onde você pode 
            consultar os sabores de pães de mel e entrar em contato com a vendedora!
          </p>

          <hr/>

          <h3>Quais as funcionalidades do site ? </h3>
          <p>Na página inicial podemos falar diretamente com a vendedora ja selecionando o sabor , podendo clicar 
            no símbolo do whatsapp ou no nome do sabor logo abaixo do icone do pão de mel escolhido , ele te 
            encaminhara direto para o whatsapp da vendedora com a mensagem pré definida com o sabor escolhido 
          </p>

          <h3>Como ir para as outras páginas ? </h3>
          <p>A bara de navegação no topo da página  e suas funcionalidades</p>

            <ul>
              <li>
                  Quem somos - Ao clicar irá abrir a página
                  de apresentação da vendedora 
              </li>
              <li>Cardápio - Para visualizar com mais detalhes um pouco mais sobre cada pão de mel</li>
              <li>Home - Para voltar para a tela inicial basta clicar na logo do site no canto superior
                esquerdo escrito sugar waves
              </li>
            </ul>
            


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
